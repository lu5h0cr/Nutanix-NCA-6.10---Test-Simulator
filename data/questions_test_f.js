/*
  Quantyra - Nutanix NCA 6.10
  Practice Test F
  Banco separado para simulador.
*/

window.NCA_QUESTIONS_TEST_F = [
  {
    "id": "NCA610-F-001",
    "source": "Practice Test F",
    "question": "What is the purpose of the Uhura service in Nutanix clusters?",
    "options": [
      "Uhura manages internal cluster communication and messaging",
      "Uhura handles storage I/O operations and data placement",
      "Uhura controls VM migration and live motion operations",
      "Uhura provides external API access for management"
    ],
    "correctAnswers": [
      "Uhura manages internal cluster communication and messaging"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-002",
    "source": "Practice Test F",
    "question": "What storage feature reduces capacity requirements for virtual machine templates?",
    "options": [
      "Thick provisioning reduces capacity for VM templates",
      "Full cloning reduces capacity for VM templates",
      "Eager zeroed reduces capacity for VM templates",
      "Linked cloning reduces capacity for VM templates"
    ],
    "correctAnswers": [
      "Linked cloning reduces capacity for VM templates"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-003",
    "source": "Practice Test F",
    "question": "What happens when you enable compression on an existing storage container?",
    "options": [
      "New writes are compressed; existing data compressed by Curator",
      "All existing data is immediately compressed inline",
      "Existing data is compressed; new writes remain uncompressed",
      "No data is compressed until manual trigger"
    ],
    "correctAnswers": [
      "New writes are compressed; existing data compressed by Curator"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-004",
    "source": "Practice Test F",
    "question": "Which Nutanix product provides object storage with S3 compatibility?",
    "options": [
      "Nutanix Objects provides object storage with S3 compatibility",
      "Nutanix Volumes provides object storage with S3 compatibility",
      "Nutanix Files provides object storage with S3 compatibility",
      "Nutanix Buckets provides object storage with S3 compatibility"
    ],
    "correctAnswers": [
      "Nutanix Objects provides object storage with S3 compatibility"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-005",
    "source": "Practice Test F",
    "question": "Which alert destination requires firewall configuration for UDP port 514?",
    "options": [
      "Webhook alerts require UDP port 514 for delivery",
      "SNMP traps require UDP port 514 for delivery",
      "Syslog alerts require UDP port 514 for delivery",
      "Email alerts require UDP port 514 for delivery"
    ],
    "correctAnswers": [
      "Syslog alerts require UDP port 514 for delivery"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-006",
    "source": "Practice Test F",
    "question": "Which LCM operation can be performed without scheduling downtime?",
    "options": [
      "Hypervisor update can be performed without downtime",
      "NIC driver update can be performed without downtime",
      "AOS software update can be performed without downtime",
      "BIOS firmware update can be performed without downtime"
    ],
    "correctAnswers": [
      "AOS software update can be performed without downtime"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-007",
    "source": "Practice Test F",
    "question": "What is the correct sequence to perform VM disaster recovery from remote site?",
    "options": [
      "Test Connectivity > Power On VMs > Activate Protection Domain > Identify Recovery Point",
      "Identify Recovery Point > Activate Protection Domain > Power On VMs > Test Connectivity",
      "Activate Protection Domain > Identify Recovery Point > Test Connectivity > Power On VMs",
      "Power On VMs > Identify Recovery Point > Activate Protection Domain > Test Connectivity"
    ],
    "correctAnswers": [
      "Identify Recovery Point > Activate Protection Domain > Power On VMs > Test Connectivity"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-008",
    "source": "Practice Test F",
    "question": "What happens when a storage container reaches its configured capacity limit?",
    "options": [
      "Data automatically spills over to other available containers",
      "Container automatically expands beyond the configured limit",
      "Oldest data is automatically deleted to make room",
      "New writes to that container fail with out-of-space errors"
    ],
    "correctAnswers": [
      "New writes to that container fail with out-of-space errors"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-009",
    "source": "Practice Test F",
    "question": "Which two factors determine Shadow Clone effectiveness? (Select two)",
    "options": [
      "Size of individual data blocks",
      "Number of writes to the shared data",
      "Number of VMs reading identical data blocks",
      "Frequency of read operations on shared data"
    ],
    "correctAnswers": [
      "Number of VMs reading identical data blocks",
      "Frequency of read operations on shared data"
    ],
    "multiple": true
  },
  {
    "id": "NCA610-F-010",
    "source": "Practice Test F",
    "question": "What is the minimum cluster size to implement both RF2 and RF3 containers?",
    "options": [
      "Three nodes minimum for both RF2 and RF3",
      "Five nodes minimum for both RF2 and RF3",
      "Six nodes minimum for both RF2 and RF3",
      "Four nodes minimum for both RF2 and RF3"
    ],
    "correctAnswers": [
      "Five nodes minimum for both RF2 and RF3"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-011",
    "source": "Practice Test F",
    "question": "You need to check which nodes are running outdated AOS versions. Where do you look?",
    "options": [
      "In VM list showing node assignments and versions",
      "In LCM inventory showing node software versions",
      "In Network configuration showing node connectivity status",
      "In Storage containers showing node participation details"
    ],
    "correctAnswers": [
      "In LCM inventory showing node software versions"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-012",
    "source": "Practice Test F",
    "question": "Which alert policy component defines the condition that triggers an alert?",
    "options": [
      "Alert severity defines the condition triggering the alert",
      "Alert action defines the condition triggering the alert",
      "Alert destination defines the condition triggering the alert",
      "Alert trigger defines the condition triggering the alert"
    ],
    "correctAnswers": [
      "Alert trigger defines the condition triggering the alert"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-013",
    "source": "Practice Test F",
    "question": "What is the correct sequence to enable deduplication for maximum space savings?",
    "options": [
      "Configure Schedule > Analyze Data > Monitor Savings > Enable Deduplication",
      "Analyze Data > Enable Deduplication > Configure Schedule > Monitor Savings",
      "Monitor Savings > Enable Deduplication > Analyze Data > Configure Schedule",
      "Enable Deduplication > Configure Schedule > Analyze Data > Monitor Savings"
    ],
    "correctAnswers": [
      "Analyze Data > Enable Deduplication > Configure Schedule > Monitor Savings"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-014",
    "source": "Practice Test F",
    "question": "Which command-line interface is specific to AHV and VM management?",
    "options": [
      "acli is specific to AHV and VM management",
      "pwsh is specific to AHV and VM management",
      "ncli is specific to AHV and VM management",
      "esxcli is specific to AHV and VM management"
    ],
    "correctAnswers": [
      "acli is specific to AHV and VM management"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-015",
    "source": "Practice Test F",
    "question": "What is the function of the Arithmos service in Nutanix clusters?",
    "options": [
      "Arithmos manages storage I/O operations and placement",
      "Arithmos collects and aggregates cluster statistics and metrics",
      "Arithmos handles user authentication and authorization",
      "Arithmos controls VM migration and load balancing"
    ],
    "correctAnswers": [
      "Arithmos collects and aggregates cluster statistics and metrics"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-016",
    "source": "Practice Test F",
    "question": "Which network feature provides bandwidth control for VMs in AHV?",
    "options": [
      "QoS policies provide bandwidth control for VMs in AHV",
      "Bond policies provide bandwidth control for VMs in AHV",
      "Port groups provide bandwidth control for VMs in AHV",
      "VLANs provide bandwidth control for VMs in AHV"
    ],
    "correctAnswers": [
      "QoS policies provide bandwidth control for VMs in AHV"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-017",
    "source": "Practice Test F",
    "question": "Which metric indicates that a node is nearing resource exhaustion?",
    "options": [
      "High storage efficiency ratio indicates resource exhaustion",
      "High CPU ready time indicates resource exhaustion",
      "High number of powered-on VMs indicates resource exhaustion",
      "High network bandwidth utilization indicates resource exhaustion"
    ],
    "correctAnswers": [
      "High CPU ready time indicates resource exhaustion"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-018",
    "source": "Practice Test F",
    "question": "You need to configure VM-to-VM anti-affinity rules. What is the purpose?",
    "options": [
      "Prevents specified VMs from running on the same host",
      "Restricts VMs to specific network segments",
      "Ensures VMs run on the same host for performance",
      "Forces VMs to run in specific storage containers"
    ],
    "correctAnswers": [
      "Prevents specified VMs from running on the same host"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-019",
    "source": "Practice Test F",
    "question": "Which three alerts warrant immediate investigation? (Select three)",
    "options": [
      "Cluster capacity at 90% utilization or higher",
      "Critical hardware failure alerts requiring immediate attention",
      "Informational alerts about successful backup completions",
      "Node or CVM offline alerts indicating unavailability"
    ],
    "correctAnswers": [
      "Cluster capacity at 90% utilization or higher",
      "Critical hardware failure alerts requiring immediate attention",
      "Node or CVM offline alerts indicating unavailability"
    ],
    "multiple": true
  },
  {
    "id": "NCA610-F-020",
    "source": "Practice Test F",
    "question": "Which hypervisor management interface is used for ESXi clusters?",
    "options": [
      "vCenter Server manages ESXi clusters with Prism integration",
      "Prism Element manages ESXi clusters exclusively without vCenter",
      "Direct ESXi Host Client manages clusters through Prism",
      "Hyper-V Manager manages ESXi clusters through Prism"
    ],
    "correctAnswers": [
      "vCenter Server manages ESXi clusters with Prism integration"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-021",
    "source": "Practice Test F",
    "question": "What storage feature automatically reclaims space from deleted or overwritten data?",
    "options": [
      "Thin provisioning automatically reclaims space from deleted data",
      "Compression automatically reclaims space from deleted data",
      "Deduplication automatically reclaims space from deleted data",
      "Garbage collection automatically reclaims space from deleted data"
    ],
    "correctAnswers": [
      "Garbage collection automatically reclaims space from deleted data"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-022",
    "source": "Practice Test F",
    "question": "What is the correct sequence to resize a VM's virtual disk?",
    "options": [
      "Increase Size > Select Disk > Power Off VM > Power On VM",
      "Power On VM > Select Disk > Power Off VM > Increase Size",
      "Power Off VM > Select Disk > Increase Size > Power On VM",
      "Select Disk > Increase Size > Power Off VM > Power On VM"
    ],
    "correctAnswers": [
      "Power Off VM > Select Disk > Increase Size > Power On VM"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-023",
    "source": "Practice Test F",
    "question": "You need to identify VMs with highest CPU ready time. What does this indicate?",
    "options": [
      "VMs are idle and not using allocated CPU resources",
      "VMs have optimal CPU allocation and performance",
      "VMs are experiencing network latency not CPU issues",
      "VMs are waiting for CPU resources indicating oversubscription"
    ],
    "correctAnswers": [
      "VMs are waiting for CPU resources indicating oversubscription"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-024",
    "source": "Practice Test F",
    "question": "What is the purpose of the Prism Element infrastructure in Nutanix?",
    "options": [
      "Provides hypervisor management replacing vCenter completely",
      "Provides management interface for a single cluster",
      "Provides guest OS management inside virtual machines",
      "Provides centralized management for multiple clusters globally"
    ],
    "correctAnswers": [
      "Provides management interface for a single cluster"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-025",
    "source": "Practice Test F",
    "question": "You need to configure automatic VM restart after host failure. Which feature enables this?",
    "options": [
      "VM Snapshots enable automatic restart after host failure",
      "VM Cloning enable automatic restart after host failure",
      "VM Affinity Rules enable automatic restart after host failure",
      "VM High Availability (HA) enable automatic restart after host failure"
    ],
    "correctAnswers": [
      "VM High Availability (HA) enable automatic restart after host failure"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-026",
    "source": "Practice Test F",
    "question": "You cannot connect to a VM via network. What is the first troubleshooting step?",
    "options": [
      "Restart the VM to reset network configuration",
      "Reinstall network drivers in the guest OS",
      "Verify the VM's network adapter is connected",
      "Check physical network switch configuration first"
    ],
    "correctAnswers": [
      "Verify the VM's network adapter is connected"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-027",
    "source": "Practice Test F",
    "question": "What is the function of the Cerebro service in Nutanix clusters?",
    "options": [
      "Cerebro manages storage I/O and data placement",
      "Cerebro controls VM scheduling and resource allocation",
      "Cerebro provides cluster monitoring and analytics",
      "Cerebro handles replication and disaster recovery operations"
    ],
    "correctAnswers": [
      "Cerebro handles replication and disaster recovery operations"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-028",
    "source": "Practice Test F",
    "question": "You receive a capacity warning for a storage container. What is the first action?",
    "options": [
      "Enable compression and deduplication immediately",
      "Review container usage to identify space consumers",
      "Immediately expand cluster by adding new nodes",
      "Delete all old snapshots across the container"
    ],
    "correctAnswers": [
      "Review container usage to identify space consumers"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-029",
    "source": "Practice Test F",
    "question": "What is the correct sequence to troubleshoot slow VM boot times?",
    "options": [
      "Review Boot Device > Check Storage Latency > Check Network > Analyze VM Resources",
      "Check Network > Analyze VM Resources > Check Storage Latency > Review Boot Device",
      "Check Storage Latency > Review Boot Device > Analyze VM Resources > Check Network",
      "Analyze VM Resources > Check Network > Review Boot Device > Check Storage Latency"
    ],
    "correctAnswers": [
      "Check Storage Latency > Review Boot Device > Analyze VM Resources > Check Network"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-030",
    "source": "Practice Test F",
    "question": "You need to reduce storage consumption urgently. What are the first two steps? (Select two)",
    "options": [
      "Enable compression on high-usage storage containers immediately",
      "Add new storage nodes to increase total capacity",
      "Convert all VMs to linked clones immediately",
      "Delete old snapshots that are no longer needed"
    ],
    "correctAnswers": [
      "Enable compression on high-usage storage containers immediately",
      "Delete old snapshots that are no longer needed"
    ],
    "multiple": true
  },
  {
    "id": "NCA610-F-031",
    "source": "Practice Test F",
    "question": "Which network configuration is required for inter-CVM communication in a cluster?",
    "options": [
      "CVMs use Layer 3 routing for all communication",
      "Each CVM can be on completely different networks",
      "Each CVM must have IP on same Layer 2 network",
      "CVMs communicate through hypervisor kernel only"
    ],
    "correctAnswers": [
      "Each CVM must have IP on same Layer 2 network"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-032",
    "source": "Practice Test F",
    "question": "You need to identify the busiest storage containers by IOPS. Where do you find this?",
    "options": [
      "In Storage Dashboard showing container IOPS metrics",
      "In LCM inventory showing storage activity reports",
      "In Network configuration showing bandwidth by container",
      "In VM performance metrics and analysis dashboard"
    ],
    "correctAnswers": [
      "In Storage Dashboard showing container IOPS metrics"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-033",
    "source": "Practice Test F",
    "question": "What is the correct sequence to upgrade LCM framework to the latest version?",
    "options": [
      "Access LCM > Check Current Version > Download Update > Install Update",
      "Check Current Version > Access LCM > Install Update > Download Update",
      "Download Update > Install Update > Access LCM > Check Current Version",
      "Install Update > Download Update > Check Current Version > Access LCM"
    ],
    "correctAnswers": [
      "Access LCM > Check Current Version > Download Update > Install Update"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-034",
    "source": "Practice Test F",
    "question": "You need to update ESXi versions via LCM. What is a prerequisite?",
    "options": [
      "vCenter Server must be registered in Prism",
      "ESXi hosts must be removed from vCenter",
      "All VMs must be powered off before updating",
      "Distributed switches must be converted to standard"
    ],
    "correctAnswers": [
      "vCenter Server must be registered in Prism"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-035",
    "source": "Practice Test F",
    "question": "You receive an alert that a disk is predicted to fail. What should you do first?",
    "options": [
      "Open support case and provide disk serial number",
      "Replace the disk without further investigation",
      "Ignore the alert as it's only a prediction",
      "Immediately shut down all VMs on that node"
    ],
    "correctAnswers": [
      "Open support case and provide disk serial number"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-036",
    "source": "Practice Test F",
    "question": "What storage feature enables space-efficient VM cloning in Nutanix?",
    "options": [
      "Redirect-on-write snapshot enables space-efficient VM cloning",
      "Full cloning enables space-efficient VM cloning",
      "Thick provisioning enables space-efficient VM cloning",
      "Eager zeroing enables space-efficient VM cloning"
    ],
    "correctAnswers": [
      "Redirect-on-write snapshot enables space-efficient VM cloning"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-037",
    "source": "Practice Test F",
    "question": "What is the correct sequence to perform cluster shutdown for maintenance?",
    "options": [
      "Shut Down VMs > Power Off Hosts > Stop Cluster Services > Perform Maintenance",
      "Shut Down VMs > Stop Cluster Services > Power Off Hosts > Perform Maintenance",
      "Stop Cluster Services > Shut Down VMs > Perform Maintenance > Power Off Hosts",
      "Power Off Hosts > Shut Down VMs > Stop Cluster Services > Perform Maintenance"
    ],
    "correctAnswers": [
      "Shut Down VMs > Stop Cluster Services > Power Off Hosts > Perform Maintenance"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-038",
    "source": "Practice Test F",
    "question": "What is the correct sequence to configure a new storage container?",
    "options": [
      "Set RF > Create Container > Assign to VMs > Configure Optimizations",
      "Assign to VMs > Configure Optimizations > Create Container > Set RF",
      "Create Container > Set RF > Configure Optimizations > Assign to VMs",
      "Configure Optimizations > Set RF > Create Container > Assign to VMs"
    ],
    "correctAnswers": [
      "Create Container > Set RF > Configure Optimizations > Assign to VMs"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-039",
    "source": "Practice Test F",
    "question": "What is the correct sequence to configure syslog for centralized logging?",
    "options": [
      "Syslog Servers > Test Connection > Access Settings > Add Server Details",
      "Access Settings > Syslog Servers > Add Server Details > Test Connection",
      "Add Server Details > Access Settings > Test Connection > Syslog Servers",
      "Test Connection > Add Server Details > Syslog Servers > Access Settings"
    ],
    "correctAnswers": [
      "Access Settings > Syslog Servers > Add Server Details > Test Connection"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-040",
    "source": "Practice Test F",
    "question": "Which license edition is required for Nutanix Flow network microsegmentation?",
    "options": [
      "Flow requires separate license beyond base editions",
      "Pro edition includes Flow microsegmentation capabilities",
      "Ultimate edition includes Flow microsegmentation capabilities",
      "Starter edition includes Flow microsegmentation capabilities"
    ],
    "correctAnswers": [
      "Ultimate edition includes Flow microsegmentation capabilities"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-041",
    "source": "Practice Test F",
    "question": "What is the correct sequence to investigate high CVM memory usage?",
    "options": [
      "Take Action > Review Service Logs > Check Running Processes > Identify Affected CVM",
      "Identify Affected CVM > Check Running Processes > Review Service Logs > Take Action",
      "Review Service Logs > Take Action > Identify Affected CVM > Check Running Processes",
      "Check Running Processes > Identify Affected CVM > Take Action > Review Service Logs"
    ],
    "correctAnswers": [
      "Identify Affected CVM > Check Running Processes > Review Service Logs > Take Action"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-042",
    "source": "Practice Test F",
    "question": "Which storage optimization provides the best results for virtual desktop workloads?",
    "options": [
      "Deduplication provides best results for virtual desktop workloads",
      "Thin Provisioning provides best results for virtual desktop workloads",
      "Erasure Coding provides best results for virtual desktop workloads",
      "Compression provides best results for virtual desktop workloads"
    ],
    "correctAnswers": [
      "Deduplication provides best results for virtual desktop workloads"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-043",
    "source": "Practice Test F",
    "question": "Which storage tier provides the highest performance in a hybrid cluster?",
    "options": [
      "SSD tier provides highest performance in hybrid cluster",
      "HDD tier provides highest performance in hybrid cluster",
      "Cloud tier provides highest performance in hybrid cluster",
      "NVMe tier provides highest performance in hybrid cluster"
    ],
    "correctAnswers": [
      "SSD tier provides highest performance in hybrid cluster"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-044",
    "source": "Practice Test F",
    "question": "Which LCM operation updates the cluster management software?",
    "options": [
      "Hypervisor update updates cluster management software",
      "BIOS update updates cluster management software",
      "Firmware update updates cluster management software",
      "AOS update updates cluster management software"
    ],
    "correctAnswers": [
      "AOS update updates cluster management software"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-045",
    "source": "Practice Test F",
    "question": "Which three components are monitored by NCC health checks? (Select three)",
    "options": [
      "Guest operating systems running inside virtual machines",
      "Hardware health including disks, memory, and network cards",
      "Software versions and compatibility across cluster components",
      "Configuration settings and best practices compliance"
    ],
    "correctAnswers": [
      "Hardware health including disks, memory, and network cards",
      "Software versions and compatibility across cluster components",
      "Configuration settings and best practices compliance"
    ],
    "multiple": true
  },
  {
    "id": "NCA610-F-046",
    "source": "Practice Test F",
    "question": "What is the correct sequence to create a VM from scratch in AHV?",
    "options": [
      "Attach Disks > Configure Network > Create VM > Configure Resources",
      "Create VM > Configure Resources > Attach Disks > Configure Network",
      "Configure Network > Attach Disks > Configure Resources > Create VM",
      "Configure Resources > Create VM > Configure Network > Attach Disks"
    ],
    "correctAnswers": [
      "Create VM > Configure Resources > Attach Disks > Configure Network"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-047",
    "source": "Practice Test F",
    "question": "Which LCM status indicates updates have been downloaded but not applied?",
    "options": [
      "Staged status indicates downloaded but not applied updates",
      "Available status indicates downloaded but not applied updates",
      "Ready status indicates downloaded but not applied updates",
      "Downloaded status indicates downloaded but not applied updates"
    ],
    "correctAnswers": [
      "Staged status indicates downloaded but not applied updates"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-048",
    "source": "Practice Test F",
    "question": "Which two network bond modes are supported in AHV? (Select two)",
    "options": [
      "Active-Backup bond mode provides network redundancy",
      "Balance-SLB bond mode provides load balancing",
      "LACP bond mode provides dynamic link aggregation",
      "Round-robin bond mode provides equal distribution"
    ],
    "correctAnswers": [
      "Active-Backup bond mode provides network redundancy",
      "LACP bond mode provides dynamic link aggregation"
    ],
    "multiple": true
  },
  {
    "id": "NCA610-F-049",
    "source": "Practice Test F",
    "question": "Which alert configuration sends duplicate notifications every hour until resolved?",
    "options": [
      "Alert repeat sends duplicate notifications every hour",
      "Alert reminder sends duplicate notifications every hour",
      "Alert persistence sends duplicate notifications every hour",
      "Alert escalation sends duplicate notifications every hour"
    ],
    "correctAnswers": [
      "Alert reminder sends duplicate notifications every hour"
    ],
    "multiple": false
  },
  {
    "id": "NCA610-F-050",
    "source": "Practice Test F",
    "question": "What is the function of the Chronos service in Nutanix clusters?",
    "options": [
      "Chronos controls VM migration and high availability",
      "Chronos provides user interface for cluster management",
      "Chronos manages storage I/O operations and data placement",
      "Chronos handles job scheduling and background task execution"
    ],
    "correctAnswers": [
      "Chronos handles job scheduling and background task execution"
    ],
    "multiple": false
  }
];

// Alias temporal para probar este banco directamente como data/questions.js
window.NCA_QUESTIONS = window.NCA_QUESTIONS_TEST_F;
