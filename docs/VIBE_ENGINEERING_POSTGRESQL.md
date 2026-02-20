# Vibe Engineering Instructions: PostgreSQL

## Introduction

This document outlines the vibe engineering principles for leveraging PostgreSQL within the Sovereign Intelligence Platform (SIP). PostgreSQL serves as a foundational data store for the SIP, critical for managing multi-tenant architectures, enforcing row-level security, and potentially supporting graph-based data models. These instructions are designed to ensure that PostgreSQL is utilized in a manner that upholds the SIP's core tenets of data sovereignty, security, integrity, and performance.

## Core Principles

When designing, implementing, and managing PostgreSQL databases for the SIP, adhere to the following core principles:

* **Data Sovereignty by Design:** Prioritize the physical location and legal jurisdiction of PostgreSQL instances and data. Ensure that all data storage and processing comply with the SIP's stringent sovereignty requirements, including data residency and access controls.
* **Robust Security and Isolation:** Implement comprehensive security measures, including strong authentication, authorization, and encryption. Leverage PostgreSQL's native features like Row-Level Security (RLS) to enforce strict data isolation between tenants and roles.
* **Data Integrity and Reliability:** Ensure the highest levels of data integrity through proper schema design, constraints, and transaction management. Implement robust backup, recovery, and high-availability strategies to guarantee continuous data access and prevent loss.
* **Performance and Scalability:** Optimize PostgreSQL configurations and queries for performance, ensuring that the database can efficiently handle the SIP's growing data volumes and user demands. Design for scalability to accommodate future expansion while maintaining sovereignty and security.

## Feature-Specific Instructions

### Multi-Tenant Architecture

The SIP's multi-tenant architecture necessitates careful consideration of how data is isolated and managed within PostgreSQL. The following approaches should be considered:

* **Tenant Discriminator in Shared Tables:** For scenarios requiring high resource efficiency and where data isolation can be effectively managed at the application layer and reinforced with RLS, a shared database with a `tenant_id` column in tables is suitable. This approach requires meticulous RLS policies to prevent cross-tenant data access [1].
* **Schema per Customer:** This approach provides stronger logical isolation by assigning a separate schema to each tenant within a single database. It simplifies RLS implementation as policies can be applied at the schema level, ensuring that each tenant only sees their own schema's data [1].
* **Database per Customer:** This offers the strongest isolation, with each tenant having their own dedicated PostgreSQL database. While resource-intensive, it provides maximum data sovereignty and security, as data is physically separated. This is ideal for government, regulators, and enterprise customers with the highest isolation requirements [1].

### Row-Level Security (RLS)

RLS is a critical feature for enforcing data isolation in multi-tenant environments and ensuring that users only access data they are authorized to see. When implementing RLS:

* **Enable RLS on Tables:** For any table containing sensitive or tenant-specific data, RLS must be enabled using `ALTER TABLE <table> ENABLE ROW LEVEL SECURITY` [2].
* **Define Granular Policies:** Create explicit RLS policies that specify which rows are visible or modifiable by specific roles or based on session variables (e.g. `current_setting('app.tenant_id')`). Policies should cover `SELECT`, `INSERT`, `UPDATE`, and `DELETE` operations as needed [2].
* **Test RLS Thoroughly:** Rigorously test all RLS policies to ensure they function as intended and prevent any unauthorized data access. This includes testing with different user roles and tenant contexts.

### Graph Database Capabilities (via Extensions)

While primarily a relational database, PostgreSQL can support graph data models through extensions, which is relevant for the SIP's Entity Graph Database feature.

* **Utilize Apache AGE or pgRouting:** For graph capabilities, consider extensions like Apache AGE, which allows leveraging a graph database on top of existing relational data, or pgRouting for routing and network analysis [3] [4].
* **Model Relationships Effectively:** When using a graph extension, design the graph model to accurately represent relationships between entities such as Organizations, Vendors, Cities, and Technologies, as outlined in the SIP specification.
* **Performance Considerations:** Be mindful of the performance implications of complex graph queries, especially as the graph grows. Optimize queries and consider indexing strategies specific to the chosen graph extension.

### Data Sovereignty and Compliance

PostgreSQL's configuration and management must align with the SIP's data sovereignty and compliance requirements:

* **Geographic Placement:** Deploy PostgreSQL instances in data centers located within jurisdictions that meet the SIP's sovereignty criteria. This is paramount for data residency.
* **Encryption at Rest and in Transit:** Ensure all PostgreSQL data is encrypted at rest (e.g. using disk encryption or transparent data encryption) and in transit (e.g. using SSL/TLS for client connections).
* **Auditing and Logging:** Configure comprehensive auditing and logging to track all database activities, especially access to sensitive data. These logs are crucial for compliance, security monitoring, and forensic analysis.
* **Backup and Disaster Recovery:** Implement a robust backup and disaster recovery plan that includes off-site backups in sovereign-compliant locations and regular testing of recovery procedures.

## References

[1] Crunchy Data. (2023, November 14). *Designing Your Postgres Database for Multi-tenancy*. https://www.crunchydata.com/blog/designing-your-postgres-database-for-multi-tenancy  
[2] PostgreSQL Documentation. *Row Security Policies*. https://www.postgresql.org/docs/current/ddl-rowsecurity.html  
[3] Apache AGE. *Apache AGE Graph Database*. https://age.apache.org/  
[4] Supabase. (2025, February 25). *Postgres as a Graph Database: (Ab)using pgRouting*. https://supabase.com/blog/pgrouting-postgres-graph-database
