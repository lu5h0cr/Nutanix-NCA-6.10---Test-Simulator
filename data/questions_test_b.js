// Nutanix NCA 6.10 - Practice Test B
// Extraido y normalizado manualmente desde el PDF Practice Test B.
// Nota: la pregunta 34 no aparece visible en el PDF revisado. No se invento.
// Nota: la pregunta 7 dice Select two, pero el PDF solo muestra una respuesta resaltada; se conserva para revision.

window.NCA_QUESTIONS_TEST_B = [
  {
    "id": "NCA610-B-001",
    "source": "B",
    "questionNumber": 1,
    "question": "How can an administrator check the status of a network configuration?",
    "options": [
      "Access Network settings",
      "Use Health dashboard",
      "Check Alerts page",
      "Review Cluster Runway"
    ],
    "correctAnswers": [
      "Access Network settings"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-002",
    "source": "B",
    "questionNumber": 2,
    "question": "What is the correct method to update AOS in a Nutanix cluster?",
    "options": [
      "Upload via LCM",
      "Run NCC",
      "Use SSH",
      "Use Prism Central"
    ],
    "correctAnswers": [
      "Upload via LCM"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-003",
    "source": "B",
    "questionNumber": 3,
    "question": "What is Nutanix Guest Tools (NGT)?",
    "options": [
      "Network policy enforcement tool",
      "Software for VM management and restore",
      "Tool for cluster migration tasks",
      "Storage compression utility tool"
    ],
    "correctAnswers": [
      "Software for VM management and restore"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-004",
    "source": "B",
    "questionNumber": 4,
    "question": "What does modifying existing VM resources in Nutanix refer to?",
    "options": [
      "Updating vCPU memory or configurations",
      "Installing software inside the VM",
      "Migrating VMs to another cluster",
      "Creating new VMs from templates"
    ],
    "correctAnswers": [
      "Updating vCPU memory or configurations"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-005",
    "source": "B",
    "questionNumber": 5,
    "question": "How can an administrator monitor VM CPU usage?",
    "options": [
      "Check Alerts page",
      "Use Health dashboard",
      "Access Analysis dashboard",
      "Review Cluster Runway"
    ],
    "correctAnswers": [
      "Access Analysis dashboard"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-006",
    "source": "B",
    "questionNumber": 6,
    "question": "Which Nutanix feature supports VM high availability?",
    "options": [
      "Protection Policies",
      "Metro Availability",
      "Snapshots",
      "Volume Groups"
    ],
    "correctAnswers": [
      "Metro Availability"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-007",
    "source": "B",
    "questionNumber": 7,
    "question": "Which NCC check helps ensure the cluster's data protection capabilities? (Select two)",
    "options": [
      "Data resiliency check",
      "VM snapshot scheduling",
      "Network connectivity validation",
      "Storage consistency check"
    ],
    "correctAnswers": [
      "Data resiliency check"
      "Storage consistency check"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-B-008",
    "source": "B",
    "questionNumber": 8,
    "question": "Which actions can an administrator take to review VM resource settings in Prism Element? (Select two)",
    "options": [
      "View the VM's Summary tab",
      "Check the cluster's storage pool configuration",
      "Access the VM's Settings page",
      "Run an LCM inventory"
    ],
    "correctAnswers": [
      "View the VM's Summary tab",
      "Access the VM's Settings page"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-B-009",
    "source": "B",
    "questionNumber": 9,
    "question": "What is the correct method to create a new VLAN?",
    "options": [
      "Access Network settings",
      "Use Prism Central",
      "Run NCC",
      "Use SSH"
    ],
    "correctAnswers": [
      "Access Network settings"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-010",
    "source": "B",
    "questionNumber": 10,
    "question": "Which feature provides the best RPO for disaster recovery?",
    "options": [
      "Metro Availability",
      "NearSync",
      "Async",
      "Availability Zone"
    ],
    "correctAnswers": [
      "NearSync"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-011",
    "source": "B",
    "questionNumber": 11,
    "question": "How can an administrator configure a VM for disaster recovery?",
    "options": [
      "Use Protection Policies",
      "Set VM labels",
      "Create VM Annotations",
      "Use Prism Central RBAC"
    ],
    "correctAnswers": [
      "Use Protection Policies"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-012",
    "source": "B",
    "questionNumber": 12,
    "question": "What is the correct method to monitor VM network traffic?",
    "options": [
      "Use Health dashboard",
      "Review Cluster Runway",
      "Access Analysis dashboard",
      "Check Alerts page"
    ],
    "correctAnswers": [
      "Access Analysis dashboard"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-013",
    "source": "B",
    "questionNumber": 13,
    "question": "Which Nutanix feature supports automated network segmentation?",
    "options": [
      "LCM",
      "Flow",
      "Prism Central",
      "NCC"
    ],
    "correctAnswers": [
      "Flow"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-014",
    "source": "B",
    "questionNumber": 14,
    "question": "Given 3 nodes with a 10 TB storage pool and RF-2, what is the effective capacity?",
    "options": [
      "10 TB with no replication factor",
      "5 TB usable capacity after RF-2",
      "3 TB with deduplication applied",
      "7.5 TB with compression enabled"
    ],
    "correctAnswers": [
      "5 TB usable capacity after RF-2"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-015",
    "source": "B",
    "questionNumber": 15,
    "question": "Which feature secures VM access credentials?",
    "options": [
      "RBAC",
      "Cluster Lockdown",
      "Flow",
      "Prism Central KMS"
    ],
    "correctAnswers": [
      "Cluster Lockdown"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-016",
    "source": "B",
    "questionNumber": 16,
    "question": "You need to provide storage to an external database server. How do you proceed?",
    "options": [
      "Create a volume group in Prism Central",
      "Clone a VM with attached storage",
      "Configure Flow for storage access",
      "Enable deduplication on container"
    ],
    "correctAnswers": [
      "Create a volume group in Prism Central"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-017",
    "source": "B",
    "questionNumber": 17,
    "question": "If snapshot failures persist after checking storage, what do you check next?",
    "options": [
      "Network latency to remote cluster",
      "VM consistency group and snapshot logs",
      "CPU saturation on the VM",
      "Metro replication configuration"
    ],
    "correctAnswers": [
      "VM consistency group and snapshot logs"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-018",
    "source": "B",
    "questionNumber": 18,
    "question": "How can an administrator update cluster licensing?",
    "options": [
      "Use Prism Central",
      "Run NCC",
      "Use SSH",
      "Access Settings dashboard"
    ],
    "correctAnswers": [
      "Access Settings dashboard"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-019",
    "source": "B",
    "questionNumber": 19,
    "question": "What is the purpose of the Nutanix API Explorer?",
    "options": [
      "Cluster upgrades",
      "Storage optimization",
      "VM migration",
      "Programmatic interaction"
    ],
    "correctAnswers": [
      "Programmatic interaction"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-020",
    "source": "B",
    "questionNumber": 20,
    "question": "What Nutanix feature supports automated storage optimization?",
    "options": [
      "Compression",
      "Erasure Coding",
      "Intelligent Cloning",
      "Deduplication"
    ],
    "correctAnswers": [
      "Erasure Coding"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-021",
    "source": "B",
    "questionNumber": 21,
    "question": "How can an administrator create a storage policy?",
    "options": [
      "Use SSH",
      "Access Storage settings",
      "Run NCC",
      "Use Prism Central"
    ],
    "correctAnswers": [
      "Access Storage settings"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-022",
    "source": "B",
    "questionNumber": 22,
    "question": "What is the correct method to update VM settings?",
    "options": [
      "Run NCC",
      "Use SSH",
      "Access VM settings",
      "Use Prism Central"
    ],
    "correctAnswers": [
      "Access VM settings"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-023",
    "source": "B",
    "questionNumber": 23,
    "question": "How can an administrator access the Cluster Summary page?",
    "options": [
      "From Prism Central dashboard",
      "From Prism Element Home",
      "Through Settings dashboard",
      "Via Alerts page"
    ],
    "correctAnswers": [
      "From Prism Central dashboard"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-024",
    "source": "B",
    "questionNumber": 24,
    "question": "Which Nutanix feature supports microsegmentation?",
    "options": [
      "Flow",
      "Prism Central",
      "NCC",
      "LCM"
    ],
    "correctAnswers": [
      "Flow"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-025",
    "source": "B",
    "questionNumber": 25,
    "question": "What is monitoring metro availability in Nutanix?",
    "options": [
      "Tracking replication and cluster health",
      "Managing snapshots for VM recovery",
      "Configuring VLANs for metro traffic",
      "Enabling compression for metro storage"
    ],
    "correctAnswers": [
      "Tracking replication and cluster health"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-026",
    "source": "B",
    "questionNumber": 26,
    "question": "What is the role of storage IOPS in performance charts?",
    "options": [
      "Managing virtual NIC assignments",
      "Tracking CPU usage for storage",
      "Measuring storage read/write operations",
      "Configuring VLANs for storage access"
    ],
    "correctAnswers": [
      "Measuring storage read/write operations"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-027",
    "source": "B",
    "questionNumber": 27,
    "question": "If storage IOPS is low, what do you check?",
    "options": [
      "Storage controller and disk configuration",
      "Cluster firmware update status",
      "Virtual NIC assignment issues",
      "Network VLAN configuration settings"
    ],
    "correctAnswers": [
      "Storage controller and disk configuration"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-028",
    "source": "B",
    "questionNumber": 28,
    "question": "How can an administrator check the status of LCM updates?",
    "options": [
      "Access LCM dashboard",
      "Check Alerts page",
      "Review Cluster Runway",
      "Use Health dashboard"
    ],
    "correctAnswers": [
      "Access LCM dashboard"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-029",
    "source": "B",
    "questionNumber": 29,
    "question": "What is the purpose of the Nutanix Support KB Article?",
    "options": [
      "Technical support",
      "Cluster upgrades",
      "VM migration",
      "Storage optimization"
    ],
    "correctAnswers": [
      "Technical support"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-030",
    "source": "B",
    "questionNumber": 30,
    "question": "Which Nutanix feature supports disaster recovery planning? (Select two)",
    "options": [
      "Protection Policies",
      "Volume Groups",
      "Metro Availability",
      "Snapshots"
    ],
    "correctAnswers": [
      "Protection Policies",
      "Metro Availability"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-B-031",
    "source": "B",
    "questionNumber": 31,
    "question": "Which three storage optimization features can be enabled simultaneously? (Select three)",
    "options": [
      "Thin Provisioning allocates space on demand",
      "Deduplication eliminates duplicate data blocks",
      "Compression reduces data size before storage",
      "Erasure Coding converts RF to parity scheme"
    ],
    "correctAnswers": [
      "Thin Provisioning allocates space on demand",
      "Deduplication eliminates duplicate data blocks",
      "Compression reduces data size before storage"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-B-032",
    "source": "B",
    "questionNumber": 32,
    "question": "How can an administrator view cluster alert history?",
    "options": [
      "Access Alerts page",
      "Review Cluster Runway",
      "Check Analysis dashboard",
      "Use Health dashboard"
    ],
    "correctAnswers": [
      "Access Alerts page"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-033",
    "source": "B",
    "questionNumber": 33,
    "question": "Which dashboard shows cluster resource utilization?",
    "options": [
      "Alerts",
      "Cluster Runway",
      "Health",
      "Analysis"
    ],
    "correctAnswers": [
      "Cluster Runway"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-035",
    "source": "B",
    "questionNumber": 35,
    "question": "What is the purpose of the Nutanix Community?",
    "options": [
      "Enterprise support",
      "Learning and collaboration",
      "VM migration",
      "Cluster upgrades"
    ],
    "correctAnswers": [
      "Learning and collaboration"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-036",
    "source": "B",
    "questionNumber": 36,
    "question": "Which Nutanix feature supports automated VM cloning?",
    "options": [
      "Protection Policies",
      "Snapshots",
      "Intelligent Cloning",
      "Volume Groups"
    ],
    "correctAnswers": [
      "Intelligent Cloning"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-037",
    "source": "B",
    "questionNumber": 37,
    "question": "Which tasks are performed during the LCM Inventory process in Prism Element? (Select two)",
    "options": [
      "Configuring network VLANs",
      "Creating VM snapshots",
      "Checking for available AOS updates",
      "Identifying hypervisor compatibility"
    ],
    "correctAnswers": [
      "Checking for available AOS updates",
      "Identifying hypervisor compatibility"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-B-038",
    "source": "B",
    "questionNumber": 38,
    "question": "Which feature provides role-based access control in Prism Central?",
    "options": [
      "RBAC",
      "NCC",
      "LCM",
      "Flow"
    ],
    "correctAnswers": [
      "RBAC"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-039",
    "source": "B",
    "questionNumber": 39,
    "question": "Which components are typically included in the LCM Inventory process? (Select two)",
    "options": [
      "AOS version",
      "Hypervisor firmware",
      "Network VLAN configurations",
      "VM snapshot schedules"
    ],
    "correctAnswers": [
      "AOS version",
      "Hypervisor firmware"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-B-040",
    "source": "B",
    "questionNumber": 40,
    "question": "If Prism charts show no issues but performance is poor, what do you check?",
    "options": [
      "Virtual NIC configuration settings",
      "Metro replication status",
      "VM-level metrics and logs",
      "Storage pool capacity limits"
    ],
    "correctAnswers": [
      "VM-level metrics and logs"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-041",
    "source": "B",
    "questionNumber": 41,
    "question": "Which Nutanix feature supports network optimization?",
    "options": [
      "NCC",
      "Prism Central",
      "Flow",
      "LCM"
    ],
    "correctAnswers": [
      "Flow"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-042",
    "source": "B",
    "questionNumber": 42,
    "question": "You need to create a DR plan for 10 VMs. How do you proceed?",
    "options": [
      "Enable compression on storage container",
      "Configure Flow for VM protection",
      "Create a recovery plan in Prism Central",
      "Clone VMs to a remote cluster"
    ],
    "correctAnswers": [
      "Create a recovery plan in Prism Central"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-043",
    "source": "B",
    "questionNumber": 43,
    "question": "Which feature provides cluster health diagnostics?",
    "options": [
      "LCM",
      "Prism Central",
      "Flow",
      "NCC"
    ],
    "correctAnswers": [
      "NCC"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-044",
    "source": "B",
    "questionNumber": 44,
    "question": "What are pre-check errors in Nutanix LCM?",
    "options": [
      "Storage snapshot failure",
      "Virtual NIC misassignment",
      "Issues found before LCM upgrades",
      "Incorrect VLAN configuration"
    ],
    "correctAnswers": [
      "Issues found before LCM upgrades"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-045",
    "source": "B",
    "questionNumber": 45,
    "question": "What is the purpose of the Nutanix Cluster Check (NCC)?",
    "options": [
      "Upgrade software",
      "Run health checks",
      "Monitor performance",
      "Manage VMs"
    ],
    "correctAnswers": [
      "Run health checks"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-046",
    "source": "B",
    "questionNumber": 46,
    "question": "Which Nutanix feature supports real-time telemetry to Nutanix Support?",
    "options": [
      "Flow",
      "Pulse",
      "LCM",
      "NCC"
    ],
    "correctAnswers": [
      "Pulse"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-047",
    "source": "B",
    "questionNumber": 47,
    "question": "Which dashboard shows CPU and memory usage trends?",
    "options": [
      "Health",
      "Settings",
      "Alerts",
      "Analysis"
    ],
    "correctAnswers": [
      "Analysis"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-048",
    "source": "B",
    "questionNumber": 48,
    "question": "Which feature secures data at rest in a Nutanix cluster?",
    "options": [
      "Cluster Lockdown",
      "Flow",
      "STIG",
      "Prism Central KMS"
    ],
    "correctAnswers": [
      "Prism Central KMS"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-049",
    "source": "B",
    "questionNumber": 49,
    "question": "What is the purpose of the Nutanix Files feature?",
    "options": [
      "Cluster upgrades",
      "Network optimization",
      "VM management",
      "Shared storage"
    ],
    "correctAnswers": [
      "Shared storage"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-B-050",
    "source": "B",
    "questionNumber": 50,
    "question": "What is the purpose of the Nutanix Hybrid Cloud Fundamentals course?",
    "options": [
      "Basic Nutanix operations",
      "Cloud orchestration",
      "Security hardening",
      "Advanced cluster management"
    ],
    "correctAnswers": [
      "Basic Nutanix operations"
    ],
    "multiple": false,
    "explanation": ""
  }
];

// Compatibilidad: si este archivo se usa solo en el simulador, carga Test B como banco principal.
if (!window.NCA_QUESTIONS) {
  window.NCA_QUESTIONS = window.NCA_QUESTIONS_TEST_B;
}
