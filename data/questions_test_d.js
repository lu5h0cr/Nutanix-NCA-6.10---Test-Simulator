// Nutanix NCA 6.10 - Practice Test D
// Extraido y normalizado manualmente desde el PDF Practice Test D.
// Validado por bloque: 50 preguntas, 4 opciones por pregunta, multiple=true solo en Select two/three.

window.NCA_QUESTIONS_TEST_D = [
  {
    "id": "NCA610-D-001",
    "source": "D",
    "questionNumber": 1,
    "question": "Which network feature in AHV provides VM isolation at Layer 2?",
    "options": [
      "Subnets provide Layer 2 isolation for VMs",
      "VLANs provide Layer 2 isolation for VMs",
      "ACLs provide Layer 2 isolation for VMs",
      "VXLANs provide Layer 2 isolation for VMs"
    ],
    "correctAnswers": [
      "VLANs provide Layer 2 isolation for VMs"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-002",
    "source": "D",
    "questionNumber": 2,
    "question": "Which three components can LCM update simultaneously? (Select three)",
    "options": [
      "AOS software on all cluster nodes",
      "Hypervisor software on all cluster nodes",
      "Hardware firmware on all cluster nodes",
      "Guest OS inside virtual machines"
    ],
    "correctAnswers": [
      "AOS software on all cluster nodes",
      "Hypervisor software on all cluster nodes",
      "Hardware firmware on all cluster nodes"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-D-003",
    "source": "D",
    "questionNumber": 3,
    "question": "You need to configure VM-to-VM network isolation within AHV. Which feature should you use?",
    "options": [
      "VLANs for network segmentation and VM isolation",
      "Port mirroring for network segmentation and VM isolation",
      "QoS policies for network segmentation and VM isolation",
      "Load balancing for network segmentation and VM isolation"
    ],
    "correctAnswers": [
      "VLANs for network segmentation and VM isolation"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-004",
    "source": "D",
    "questionNumber": 4,
    "question": "What is the correct sequence to add a new VLAN to an AHV cluster?",
    "options": [
      "Create VLAN > Access Network Config > Configure Uplinks > Assign VLAN ID",
      "Configure Uplinks > Assign VLAN ID > Create VLAN > Access Network Config",
      "Assign VLAN ID > Create VLAN > Access Network Config > Configure Uplinks",
      "Access Network Config > Create VLAN > Assign VLAN ID > Configure Uplinks"
    ],
    "correctAnswers": [
      "Access Network Config > Create VLAN > Assign VLAN ID > Configure Uplinks"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-005",
    "source": "D",
    "questionNumber": 5,
    "question": "Which NCC health check category validates storage performance and functionality?",
    "options": [
      "Software checks validate storage performance and functionality",
      "Storage checks validate storage performance and functionality",
      "Network checks validate storage performance and functionality",
      "Hardware checks validate storage performance and functionality"
    ],
    "correctAnswers": [
      "Storage checks validate storage performance and functionality"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-006",
    "source": "D",
    "questionNumber": 6,
    "question": "You receive a hardware failure alert for a disk. What information does the alert provide? (Select three)",
    "options": [
      "Serial number of the specific failed disk device",
      "Current CPU utilization on the affected node",
      "Recommended actions to resolve the disk failure",
      "Node identifier where the failed disk is located"
    ],
    "correctAnswers": [
      "Serial number of the specific failed disk device",
      "Recommended actions to resolve the disk failure",
      "Node identifier where the failed disk is located"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-D-007",
    "source": "D",
    "questionNumber": 7,
    "question": "Which LCM status indicates an update completed successfully on all nodes?",
    "options": [
      "Completed status indicates successful update on all nodes",
      "Done status indicates successful update on all nodes",
      "Finished status indicates successful update on all nodes",
      "Success status indicates successful update on all nodes"
    ],
    "correctAnswers": [
      "Success status indicates successful update on all nodes"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-008",
    "source": "D",
    "questionNumber": 8,
    "question": "What does the capacity runway metric indicate in Prism?",
    "options": [
      "Maximum theoretical capacity if fully expanded",
      "Current available storage space in absolute numbers",
      "Percentage of storage currently in use",
      "Estimated time before storage capacity is exhausted"
    ],
    "correctAnswers": [
      "Estimated time before storage capacity is exhausted"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-009",
    "source": "D",
    "questionNumber": 9,
    "question": "Which hypervisor management tool is built into AHV without additional installation?",
    "options": [
      "vCenter Server is built into AHV for management",
      "System Center is built into AHV for management",
      "XenCenter is built into AHV for management",
      "Prism Element is built into AHV for management"
    ],
    "correctAnswers": [
      "Prism Element is built into AHV for management"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-010",
    "source": "D",
    "questionNumber": 10,
    "question": "Which protocol does AHV use for VM storage access to the CVM?",
    "options": [
      "iSCSI protocol for VM storage access",
      "FC protocol for VM storage access",
      "NFS protocol for VM storage access",
      "SMB protocol for VM storage access"
    ],
    "correctAnswers": [
      "NFS protocol for VM storage access"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-011",
    "source": "D",
    "questionNumber": 11,
    "question": "You need to temporarily disable alerts for scheduled maintenance. What should you configure?",
    "options": [
      "Alert severity levels to informational only",
      "Alert suppression rules for the maintenance period",
      "Alert policies to inactive state",
      "Alert destinations to null output"
    ],
    "correctAnswers": [
      "Alert suppression rules for the maintenance period"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-012",
    "source": "D",
    "questionNumber": 12,
    "question": "What is the correct sequence to add a virtual disk to an existing VM?",
    "options": [
      "Select VM > Add Disk > Configure Size > Power Off > Power On",
      "Power Off > Select VM > Configure Size > Add Disk > Power On",
      "Select VM > Power Off > Add Disk > Configure Size > Power On",
      "Add Disk > Select VM > Power Off > Configure Size > Power On"
    ],
    "correctAnswers": [
      "Select VM > Power Off > Add Disk > Configure Size > Power On"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-013",
    "source": "D",
    "questionNumber": 13,
    "question": "What happens to VM I/O when a node fails in an RF2 cluster?",
    "options": [
      "All VMs on failed node become unavailable permanently",
      "VMs automatically restart on surviving nodes with data intact",
      "VMs pause until the failed node recovers",
      "VMs continue running but lose all unsaved data"
    ],
    "correctAnswers": [
      "VMs automatically restart on surviving nodes with data intact"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-014",
    "source": "D",
    "questionNumber": 14,
    "question": "Your cluster shows high CVM CPU usage. What are the first two troubleshooting steps? (Select two)",
    "options": [
      "Identify which CVM is experiencing high CPU usage",
      "Reduce the number of running VMs on cluster",
      "Review running processes on the affected CVM",
      "Immediately restart all CVMs to clear the issue"
    ],
    "correctAnswers": [
      "Identify which CVM is experiencing high CPU usage",
      "Review running processes on the affected CVM"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-D-015",
    "source": "D",
    "questionNumber": 15,
    "question": "You need to migrate a VM to a different host without downtime. What feature enables this?",
    "options": [
      "VM Cloning moves VM between hosts without downtime",
      "Storage vMotion moves VM between hosts without downtime",
      "Live Migration moves VM between hosts without downtime",
      "Cold Migration moves VM between hosts without downtime"
    ],
    "correctAnswers": [
      "Live Migration moves VM between hosts without downtime"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-016",
    "source": "D",
    "questionNumber": 16,
    "question": "What is the correct sequence to investigate high storage latency?",
    "options": [
      "Identify Hot Spots > Check Storage Performance > Analyze Workload > Review Disk Health",
      "Check Storage Performance > Identify Hot Spots > Review Disk Health > Analyze Workload",
      "Review Disk Health > Analyze Workload > Check Storage Performance > Identify Hot Spots",
      "Analyze Workload > Review Disk Health > Identify Hot Spots > Check Storage Performance"
    ],
    "correctAnswers": [
      "Check Storage Performance > Identify Hot Spots > Review Disk Health > Analyze Workload"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-017",
    "source": "D",
    "questionNumber": 17,
    "question": "You need to check current AOS version across all nodes. Where do you find this information?",
    "options": [
      "In LCM Dashboard under Inventory and Software Versions",
      "In VM Management under System Information and Versions",
      "In Storage Container settings under Cluster Configuration",
      "In Network Settings under Infrastructure Details and Versions"
    ],
    "correctAnswers": [
      "In LCM Dashboard under Inventory and Software Versions"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-018",
    "source": "D",
    "questionNumber": 18,
    "question": "What is the correct sequence to create a support case for a critical cluster issue?",
    "options": [
      "Access Support Portal > Create Case > Provide Details > Gather Logs",
      "Provide Details > Create Case > Gather Logs > Access Support Portal",
      "Gather Logs > Access Support Portal > Create Case > Provide Details",
      "Create Case > Gather Logs > Provide Details > Access Support Portal"
    ],
    "correctAnswers": [
      "Access Support Portal > Create Case > Provide Details > Gather Logs"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-019",
    "source": "D",
    "questionNumber": 19,
    "question": "What is the minimum number of CVMs required for a functioning Nutanix cluster?",
    "options": [
      "Two CVMs minimum required for functioning cluster operations",
      "Three CVMs minimum required for functioning cluster operations",
      "Four CVMs minimum required for functioning cluster operations",
      "One CVM minimum required for functioning cluster operations"
    ],
    "correctAnswers": [
      "Three CVMs minimum required for functioning cluster operations"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-020",
    "source": "D",
    "questionNumber": 20,
    "question": "What is the function of the Curator service in Nutanix?",
    "options": [
      "Curator manages VM snapshots and backup operations",
      "Curator controls network traffic and QoS policies",
      "Curator provides security scanning and threat detection",
      "Curator handles background data optimization and cleanup tasks"
    ],
    "correctAnswers": [
      "Curator handles background data optimization and cleanup tasks"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-021",
    "source": "D",
    "questionNumber": 21,
    "question": "Which two factors determine effective storage capacity in a Nutanix cluster? (Select two)",
    "options": [
      "Number of virtual machines running",
      "Replication Factor configuration setting",
      "Total raw capacity across all nodes",
      "Hypervisor type being used"
    ],
    "correctAnswers": [
      "Replication Factor configuration setting",
      "Total raw capacity across all nodes"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-D-022",
    "source": "D",
    "questionNumber": 22,
    "question": "Which Nutanix product provides disaster recovery and migration capabilities?",
    "options": [
      "Nutanix Mine provides disaster recovery and migration capabilities",
      "Nutanix Files provides disaster recovery and migration capabilities",
      "Nutanix Flow provides disaster recovery and migration capabilities",
      "Nutanix Move provides disaster recovery and migration capabilities"
    ],
    "correctAnswers": [
      "Nutanix Move provides disaster recovery and migration capabilities"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-023",
    "source": "D",
    "questionNumber": 23,
    "question": "Which LCM component version should be updated first before other updates?",
    "options": [
      "Hypervisor version should be updated first before others",
      "AOS software version should be updated first before others",
      "Firmware version should be updated first before others",
      "LCM Framework version should be updated first before others"
    ],
    "correctAnswers": [
      "LCM Framework version should be updated first before others"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-024",
    "source": "D",
    "questionNumber": 24,
    "question": "What storage optimization feature is applied inline during write operations?",
    "options": [
      "Erasure Coding is applied inline during write operations",
      "Thin Provisioning is applied inline during write operations",
      "Deduplication is applied inline during write operations",
      "Compression is applied inline during write operations"
    ],
    "correctAnswers": [
      "Compression is applied inline during write operations"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-025",
    "source": "D",
    "questionNumber": 25,
    "question": "What is the function of the OpLog in Nutanix storage architecture?",
    "options": [
      "OpLog handles data replication between nodes",
      "OpLog acts as a write buffer on SSDs for incoming I/O",
      "OpLog manages read cache for frequently accessed data",
      "OpLog provides long-term storage on HDDs"
    ],
    "correctAnswers": [
      "OpLog acts as a write buffer on SSDs for incoming I/O"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-026",
    "source": "D",
    "questionNumber": 26,
    "question": "Which two statements are true about Nutanix storage containers? (Select two)",
    "options": [
      "Containers must have the same RF as the storage pool",
      "Containers can have different deduplication schedules independently",
      "Containers must have same capacity limits across cluster",
      "Containers can have different compression settings on same pool"
    ],
    "correctAnswers": [
      "Containers can have different deduplication schedules independently",
      "Containers can have different compression settings on same pool"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-D-027",
    "source": "D",
    "questionNumber": 27,
    "question": "Which storage container setting affects data reduction ratios most significantly?",
    "options": [
      "Replication Factor affects data reduction ratios most significantly",
      "Compression affects data reduction ratios most significantly",
      "Redundancy Factor affects data reduction ratios most significantly",
      "Erasure Coding affects data reduction ratios most significantly"
    ],
    "correctAnswers": [
      "Compression affects data reduction ratios most significantly"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-028",
    "source": "D",
    "questionNumber": 28,
    "question": "Which LCM operation requires minimal to no cluster downtime?",
    "options": [
      "AOS software update requires minimal to no downtime",
      "BIOS update requires minimal to no downtime",
      "Firmware update requires minimal to no downtime",
      "Hypervisor update requires minimal to no downtime"
    ],
    "correctAnswers": [
      "AOS software update requires minimal to no downtime"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-029",
    "source": "D",
    "questionNumber": 29,
    "question": "What is the correct sequence to troubleshoot a failed NCC health check?",
    "options": [
      "Apply Resolution > Research KB Articles > Review NCC Output > Identify Failed Check",
      "Research KB Articles > Identify Failed Check > Apply Resolution > Review NCC Output",
      "Review NCC Output > Identify Failed Check > Research KB Articles > Apply Resolution",
      "Identify Failed Check > Review NCC Output > Apply Resolution > Research KB Articles"
    ],
    "correctAnswers": [
      "Review NCC Output > Identify Failed Check > Research KB Articles > Apply Resolution"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-030",
    "source": "D",
    "questionNumber": 30,
    "question": "Which alert policy trigger is based on resource utilization thresholds?",
    "options": [
      "Log-based triggers activate on resource utilization thresholds",
      "Time-based triggers activate on resource utilization thresholds",
      "Event-based triggers activate on resource utilization thresholds",
      "Metric-based triggers activate on resource utilization thresholds"
    ],
    "correctAnswers": [
      "Metric-based triggers activate on resource utilization thresholds"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-031",
    "source": "D",
    "questionNumber": 31,
    "question": "A VM fails to power on with an error. What are the first two troubleshooting steps? (Select two)",
    "options": [
      "Review the error message details and VM logs",
      "Immediately delete and recreate the virtual machine",
      "Upgrade the hypervisor to the latest version",
      "Check if sufficient cluster resources are available"
    ],
    "correctAnswers": [
      "Review the error message details and VM logs",
      "Check if sufficient cluster resources are available"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-D-032",
    "source": "D",
    "questionNumber": 32,
    "question": "What is the purpose of Shadow Clones in Nutanix?",
    "options": [
      "Reduces storage capacity by removing duplicate blocks",
      "Optimizes read performance for identical VM data",
      "Provides faster VM cloning operations",
      "Creates backup copies of critical VMs"
    ],
    "correctAnswers": [
      "Optimizes read performance for identical VM data"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-033",
    "source": "D",
    "questionNumber": 33,
    "question": "Which VM snapshot operation preserves memory state for instant recovery?",
    "options": [
      "Cold snapshot preserves memory state for recovery",
      "Application-consistent snapshot preserves memory state for recovery",
      "Memory-inclusive snapshot preserves memory state for recovery",
      "Crash-consistent snapshot preserves memory state for recovery"
    ],
    "correctAnswers": [
      "Memory-inclusive snapshot preserves memory state for recovery"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-034",
    "source": "D",
    "questionNumber": 34,
    "question": "What is the minimum LCM Framework version required for Dark Site functionality?",
    "options": [
      "LCM Framework 2.0 or higher for Dark Site",
      "LCM Framework 2.2 or higher for Dark Site",
      "LCM Framework 2.4 or higher for Dark Site",
      "LCM Framework 3.0 or higher for Dark Site"
    ],
    "correctAnswers": [
      "LCM Framework 2.4 or higher for Dark Site"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-035",
    "source": "D",
    "questionNumber": 35,
    "question": "Which license edition includes all Nutanix software features without restrictions?",
    "options": [
      "Starter edition includes all features without restrictions",
      "Enterprise edition includes all features without restrictions",
      "Pro edition includes all features without restrictions",
      "Ultimate edition includes all features without restrictions"
    ],
    "correctAnswers": [
      "Ultimate edition includes all features without restrictions"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-036",
    "source": "D",
    "questionNumber": 36,
    "question": "Your cluster experiences a network partition. What mechanism maintains data consistency?",
    "options": [
      "Distributed lock maintains consistency during network partition",
      "Quorum-based consensus maintains consistency during network partition",
      "Master-slave replication maintains consistency during network partition",
      "Two-phase commit maintains consistency during network partition"
    ],
    "correctAnswers": [
      "Quorum-based consensus maintains consistency during network partition"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-037",
    "source": "D",
    "questionNumber": 37,
    "question": "Which alert destination requires SMTP server configuration in Prism?",
    "options": [
      "SNMP alert destination requires SMTP server for delivery",
      "Webhook alert destination requires SMTP server for delivery",
      "Email alert destination requires SMTP server for delivery",
      "Syslog alert destination requires SMTP server for delivery"
    ],
    "correctAnswers": [
      "Email alert destination requires SMTP server for delivery"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-038",
    "source": "D",
    "questionNumber": 38,
    "question": "You need to increase storage capacity urgently. What is the fastest method?",
    "options": [
      "Migrate cold data to external archival storage",
      "Expand existing nodes with additional disk shelves",
      "Add new storage-only node to the existing cluster",
      "Enable compression and deduplication on all containers"
    ],
    "correctAnswers": [
      "Add new storage-only node to the existing cluster"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-039",
    "source": "D",
    "questionNumber": 39,
    "question": "Which Nutanix feature automatically balances data across nodes in a cluster?",
    "options": [
      "Data Locality automatically balances data across cluster nodes",
      "Stargate automatically balances data across cluster nodes",
      "OpLog automatically balances data across cluster nodes",
      "Curator automatically balances data across cluster nodes"
    ],
    "correctAnswers": [
      "Curator automatically balances data across cluster nodes"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-040",
    "source": "D",
    "questionNumber": 40,
    "question": "You need to verify cluster redundancy status. What metric should you check?",
    "options": [
      "CPU and memory utilization per host",
      "Network bandwidth utilization across all nodes",
      "Current Replication Factor configuration and data distribution",
      "Available storage capacity and usage percentages"
    ],
    "correctAnswers": [
      "Current Replication Factor configuration and data distribution"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-041",
    "source": "D",
    "questionNumber": 41,
    "question": "What is the correct sequence to perform a rolling AOS upgrade?",
    "options": [
      "Update Remaining Nodes > Update Leader > Verify Prerequisites > Validate Cluster",
      "Validate Cluster > Update Leader > Update Remaining Nodes > Verify Prerequisites",
      "Update Leader > Verify Prerequisites > Validate Cluster > Update Remaining Nodes",
      "Verify Prerequisites > Update Leader > Update Remaining Nodes > Validate Cluster"
    ],
    "correctAnswers": [
      "Verify Prerequisites > Update Leader > Update Remaining Nodes > Validate Cluster"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-042",
    "source": "D",
    "questionNumber": 42,
    "question": "You are planning cluster maintenance. What is the correct sequence to put a node in maintenance mode?",
    "options": [
      "Enable Maintenance Mode > Migrate VMs > Perform Maintenance > Disable Maintenance Mode",
      "Perform Maintenance > Migrate VMs > Enable Maintenance Mode > Disable Maintenance Mode",
      "Migrate VMs > Enable Maintenance Mode > Perform Maintenance > Disable Maintenance Mode",
      "Disable Maintenance Mode > Migrate VMs > Perform Maintenance > Enable Maintenance Mode"
    ],
    "correctAnswers": [
      "Migrate VMs > Enable Maintenance Mode > Perform Maintenance > Disable Maintenance Mode"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-043",
    "source": "D",
    "questionNumber": 43,
    "question": "What happens when you enable Erasure Coding on a container?",
    "options": [
      "Data is converted to EC during next write",
      "Data is converted to EC after deduplication runs",
      "Data is converted to EC when Curator processes it",
      "Data is immediately converted to EC format"
    ],
    "correctAnswers": [
      "Data is converted to EC when Curator processes it"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-044",
    "source": "D",
    "questionNumber": 44,
    "question": "What is the correct sequence to deploy a VM from a template?",
    "options": [
      "Deploy VM > Select Template > Configure VM Settings > Choose Storage",
      "Configure VM Settings > Choose Storage > Deploy VM > Select Template",
      "Select Template > Configure VM Settings > Choose Storage > Deploy VM",
      "Choose Storage > Select Template > Deploy VM > Configure VM Settings"
    ],
    "correctAnswers": [
      "Select Template > Configure VM Settings > Choose Storage > Deploy VM"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-045",
    "source": "D",
    "questionNumber": 45,
    "question": "What is the purpose of the Metadata service in Nutanix clusters?",
    "options": [
      "Manages user authentication and authorization policies",
      "Tracks location and attributes of all data blocks",
      "Monitors hardware health and generates alerts",
      "Handles network packet routing between VMs"
    ],
    "correctAnswers": [
      "Tracks location and attributes of all data blocks"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-046",
    "source": "D",
    "questionNumber": 46,
    "question": "Which LCM feature prevents updates during business hours?",
    "options": [
      "Update Queuing prevents updates during specified periods",
      "Update Throttling prevents updates during specified periods",
      "Update Scheduling prevents updates during specified periods",
      "Update Blackout Windows prevent updates during specified periods"
    ],
    "correctAnswers": [
      "Update Blackout Windows prevent updates during specified periods"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-047",
    "source": "D",
    "questionNumber": 47,
    "question": "Which storage tier does Nutanix prioritize for frequently accessed data?",
    "options": [
      "Cloud tier for frequently accessed hot data",
      "HDD tier for frequently accessed hot data",
      "SSD tier for frequently accessed hot data",
      "NVMe tier for frequently accessed hot data"
    ],
    "correctAnswers": [
      "SSD tier for frequently accessed hot data"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-048",
    "source": "D",
    "questionNumber": 48,
    "question": "What is the correct sequence to configure an SMTP server for email alerts?",
    "options": [
      "Navigate Settings > Alerts > Email Config > Enter SMTP Details",
      "Alerts > Enter SMTP Details > Navigate Settings > Email Config",
      "Enter SMTP Details > Navigate Settings > Email Config > Alerts",
      "Email Config > Alerts > Enter SMTP Details > Navigate Settings"
    ],
    "correctAnswers": [
      "Navigate Settings > Alerts > Email Config > Enter SMTP Details"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-049",
    "source": "D",
    "questionNumber": 49,
    "question": "What is the purpose of the acli command in AHV environments?",
    "options": [
      "acli provides command-line interface for AHV management tasks",
      "acli provides REST API access for automation",
      "acli provides GUI-based management for AHV clusters",
      "acli provides backup and recovery operations for VMs"
    ],
    "correctAnswers": [
      "acli provides command-line interface for AHV management tasks"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-D-050",
    "source": "D",
    "questionNumber": 50,
    "question": "What is the function of Prism Central in a Nutanix environment?",
    "options": [
      "Centralized management for single cluster only",
      "Replacement for Prism Element at node level",
      "Centralized management for multiple clusters across locations",
      "Hardware-level BIOS configuration and monitoring tool"
    ],
    "correctAnswers": [
      "Centralized management for multiple clusters across locations"
    ],
    "multiple": false,
    "explanation": ""
  }
];

// Alias para probar este test directamente como data/questions.js
window.NCA_QUESTIONS = window.NCA_QUESTIONS_TEST_D;
