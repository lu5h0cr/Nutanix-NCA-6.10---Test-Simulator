// Nutanix NCA 6.10 - Practice Test C
// Extraido y normalizado manualmente desde el PDF Practice Test C.
// Validado por bloque: 50 preguntas, 4 opciones por pregunta, multiple=true solo en Select two/three.

window.NCA_QUESTIONS_TEST_C = [
  {
    "id": "NCA610-C-001",
    "source": "C",
    "questionNumber": 1,
    "question": "What happens during an LCM update if a node goes offline mid-process?",
    "options": [
      "LCM automatically skips that node and continues with others",
      "LCM pauses the update and requires manual intervention",
      "LCM forces the node online and completes the update",
      "LCM reverts all changes and restarts from the beginning"
    ],
    "correctAnswers": [
      "LCM pauses the update and requires manual intervention"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-002",
    "source": "C",
    "questionNumber": 2,
    "question": "Which license level is required to enable data-at-rest encryption?",
    "options": [
      "Starter edition includes encryption capabilities for data",
      "All editions include encryption capabilities for data",
      "Pro edition includes encryption capabilities for data",
      "Ultimate edition includes encryption capabilities for data"
    ],
    "correctAnswers": [
      "Ultimate edition includes encryption capabilities for data"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-003",
    "source": "C",
    "questionNumber": 3,
    "question": "Which license feature allows unlimited VM scaling on Nutanix clusters?",
    "options": [
      "All licenses allow unlimited VM scaling capability",
      "Pro license allows unlimited VM scaling capability",
      "Ultimate license allows unlimited VM scaling capability",
      "Starter license allows unlimited VM scaling capability"
    ],
    "correctAnswers": [
      "All licenses allow unlimited VM scaling capability"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-004",
    "source": "C",
    "questionNumber": 4,
    "question": "Which storage optimization technique reduces capacity by finding identical data blocks?",
    "options": [
      "Erasure Coding reduces storage by finding identical data blocks",
      "Compression reduces storage by finding identical data blocks",
      "Deduplication reduces storage by finding identical data blocks",
      "Thin Provisioning reduces storage by finding identical data blocks"
    ],
    "correctAnswers": [
      "Deduplication reduces storage by finding identical data blocks"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-005",
    "source": "C",
    "questionNumber": 5,
    "question": "What is the purpose of the Storage Pool in Nutanix architecture?",
    "options": [
      "Creates isolated storage for different tenant workloads",
      "Aggregates physical storage devices across all cluster nodes",
      "Manages network bandwidth allocation for storage traffic",
      "Provides RAID protection for individual disk drives"
    ],
    "correctAnswers": [
      "Aggregates physical storage devices across all cluster nodes"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-006",
    "source": "C",
    "questionNumber": 6,
    "question": "What is the correct sequence to export cluster configuration for support?",
    "options": [
      "Access Settings > Export > Select Components > Download File",
      "Download File > Select Components > Export > Access Settings",
      "Export > Download File > Access Settings > Select Components",
      "Select Components > Access Settings > Download File > Export"
    ],
    "correctAnswers": [
      "Access Settings > Export > Select Components > Download File"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-007",
    "source": "C",
    "questionNumber": 7,
    "question": "Which command is used to create a new virtual machine in AHV using acli?",
    "options": [
      "acli vm.create <vm_name>",
      "acli vm.new <vm_name>",
      "acli new.vm <vm_name>",
      "acli create.vm <vm_name>"
    ],
    "correctAnswers": [
      "acli vm.create <vm_name>"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-008",
    "source": "C",
    "questionNumber": 8,
    "question": "Which two storage containers can share the same storage pool? (Select two)",
    "options": [
      "Container-A configured with RF2 and compression enabled",
      "Container-B configured with RF2 and deduplication enabled",
      "Container-C configured with RF3 and erasure coding",
      "Container-D configured with different storage tier preferences"
    ],
    "correctAnswers": [
      "Container-A configured with RF2 and compression enabled",
      "Container-B configured with RF2 and deduplication enabled"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-C-009",
    "source": "C",
    "questionNumber": 9,
    "question": "What is the correct sequence to create an alert policy in Prism?",
    "options": [
      "Define Conditions > Navigate to Alerts > Create Policy > Configure Actions",
      "Configure Actions > Define Conditions > Navigate to Alerts > Create Policy",
      "Create Policy > Configure Actions > Navigate to Alerts > Define Conditions",
      "Navigate to Alerts > Create Policy > Define Conditions > Configure Actions"
    ],
    "correctAnswers": [
      "Navigate to Alerts > Create Policy > Define Conditions > Configure Actions"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-010",
    "source": "C",
    "questionNumber": 10,
    "question": "What is the correct sequence to upgrade AOS using LCM?",
    "options": [
      "Select AOS Update > Update LCM Framework > Perform Inventory > Apply Update",
      "Update LCM Framework > Perform Inventory > Select AOS Update > Apply Update",
      "Perform Inventory > Update LCM Framework > Apply Update > Select AOS Update",
      "Apply Update > Select AOS Update > Perform Inventory > Update LCM Framework"
    ],
    "correctAnswers": [
      "Update LCM Framework > Perform Inventory > Select AOS Update > Apply Update"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-011",
    "source": "C",
    "questionNumber": 11,
    "question": "You receive an alert that NCC health checks have failed. What should you do?",
    "options": [
      "Restart the cluster to clear the failed checks",
      "Contact Nutanix support immediately without investigation",
      "Review NCC output to identify specific failed checks",
      "Ignore the alert if VMs are running normally"
    ],
    "correctAnswers": [
      "Review NCC output to identify specific failed checks"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-012",
    "source": "C",
    "questionNumber": 12,
    "question": "Which network component in AHV provides VM connectivity within a cluster?",
    "options": [
      "Bridge provides connectivity for VMs in cluster",
      "vRouter provides connectivity for VMs in cluster",
      "Virtual Switch (OVS) provides connectivity for VMs in cluster",
      "Physical Switch provides connectivity for VMs in cluster"
    ],
    "correctAnswers": [
      "Virtual Switch (OVS) provides connectivity for VMs in cluster"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-013",
    "source": "C",
    "questionNumber": 13,
    "question": "How do you create a support case from Prism Element?",
    "options": [
      "Navigate to Alerts > Select Alert > Create Case > Submit",
      "Navigate to Support > New Case > Enter Details > Submit",
      "Navigate to Settings > Support Portal > New Case > Submit",
      "Navigate to Health > NCC Results > Create Case > Submit"
    ],
    "correctAnswers": [
      "Navigate to Support > New Case > Enter Details > Submit"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-014",
    "source": "C",
    "questionNumber": 14,
    "question": "Which data locality feature improves VM performance in Nutanix clusters?",
    "options": [
      "Data is always stored on the fastest tier",
      "Data is distributed evenly across all cluster nodes",
      "Data is replicated to external backup storage",
      "Data is preferentially stored on the same node as VM"
    ],
    "correctAnswers": [
      "Data is preferentially stored on the same node as VM"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-015",
    "source": "C",
    "questionNumber": 15,
    "question": "What is the minimum number of nodes required for RF3?",
    "options": [
      "Six nodes minimum required to implement RF3",
      "Five nodes minimum required to implement RF3",
      "Three nodes minimum required to implement RF3",
      "Four nodes minimum required to implement RF3"
    ],
    "correctAnswers": [
      "Five nodes minimum required to implement RF3"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-016",
    "source": "C",
    "questionNumber": 16,
    "question": "What alert severity level requires immediate attention and action?",
    "options": [
      "Critical severity alerts require immediate attention and action",
      "Debug severity alerts require immediate attention and action",
      "Warning severity alerts require immediate attention and action",
      "Info severity alerts require immediate attention and action"
    ],
    "correctAnswers": [
      "Critical severity alerts require immediate attention and action"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-017",
    "source": "C",
    "questionNumber": 17,
    "question": "You need to clone 50 VMs quickly. Which feature provides the fastest provisioning?",
    "options": [
      "Full clone creates completely independent VM copies fastest",
      "Template clone deploys from templates fastest",
      "Snapshot clone creates point-in-time copies fastest",
      "Linked clone uses shared base disk for fastest provisioning"
    ],
    "correctAnswers": [
      "Linked clone uses shared base disk for fastest provisioning"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-018",
    "source": "C",
    "questionNumber": 18,
    "question": "What alert configuration option sends notifications to external systems via email?",
    "options": [
      "Alert Webhook with HTTP POST sends notifications externally",
      "Alert Syslog with remote server sends notifications externally",
      "Alert SNMP trap with SNMP manager sends notifications externally",
      "Alert Policy with email action sends notifications externally"
    ],
    "correctAnswers": [
      "Alert Policy with email action sends notifications externally"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-019",
    "source": "C",
    "questionNumber": 19,
    "question": "Your storage container is full. What is the first action to increase available space?",
    "options": [
      "Migrate VMs to different containers with available space",
      "Review storage usage to identify large or unnecessary files",
      "Add more physical nodes to the cluster for capacity",
      "Enable compression and deduplication on the container immediately"
    ],
    "correctAnswers": [
      "Review storage usage to identify large or unnecessary files"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-020",
    "source": "C",
    "questionNumber": 20,
    "question": "What does the NCC (Nutanix Cluster Check) tool validate in a cluster?",
    "options": [
      "Only software versions and license validity",
      "Comprehensive cluster health including hardware, software, and configuration",
      "Only network connectivity and VLAN configuration",
      "Only hardware component health and firmware versions"
    ],
    "correctAnswers": [
      "Comprehensive cluster health including hardware, software, and configuration"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-021",
    "source": "C",
    "questionNumber": 21,
    "question": "What is the primary purpose of Life Cycle Manager (LCM) in Nutanix?",
    "options": [
      "To monitor real-time cluster performance and capacity metrics",
      "To automate software and firmware updates across cluster",
      "To configure network settings and policies for hosts",
      "To manage virtual machine snapshots and backups"
    ],
    "correctAnswers": [
      "To automate software and firmware updates across cluster"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-022",
    "source": "C",
    "questionNumber": 22,
    "question": "Which component can LCM NOT update in a Nutanix environment?",
    "options": [
      "Acropolis Operating System (AOS) and cluster software",
      "Hypervisor software including AHV, ESXi, and Hyper-V",
      "Hardware firmware for disk controllers and BIOS",
      "Third-party applications installed inside guest virtual machines"
    ],
    "correctAnswers": [
      "Third-party applications installed inside guest virtual machines"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-023",
    "source": "C",
    "questionNumber": 23,
    "question": "Which component requires manual intervention if an LCM update fails?",
    "options": [
      "The failed component must be manually updated",
      "The CVM must be manually rebooted",
      "All VMs must be manually restarted",
      "The entire cluster must be manually reimaged"
    ],
    "correctAnswers": [
      "The failed component must be manually updated"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-024",
    "source": "C",
    "questionNumber": 24,
    "question": "Your cluster is running low on storage capacity. What should you check first?",
    "options": [
      "Review capacity runway and storage usage trends",
      "Enable compression on all storage containers",
      "Immediately delete old snapshots to free space",
      "Add new nodes to increase total capacity"
    ],
    "correctAnswers": [
      "Review capacity runway and storage usage trends"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-025",
    "source": "C",
    "questionNumber": 25,
    "question": "Which component manages IP address assignment for CVMs and hypervisor hosts?",
    "options": [
      "Prism Element provides IP addressing for infrastructure",
      "DHCP server provides IP addressing for infrastructure",
      "Foundation tool provides IP addressing during initial setup",
      "Static IP configuration provides IP addressing for infrastructure"
    ],
    "correctAnswers": [
      "Static IP configuration provides IP addressing for infrastructure"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-026",
    "source": "C",
    "questionNumber": 26,
    "question": "You need to view VM console to troubleshoot boot issues. Where do you access this?",
    "options": [
      "In Prism Element under VM list and console",
      "In Network configuration under VM connections and console",
      "In LCM dashboard under VM operations and console",
      "In Storage container settings under VM management and console"
    ],
    "correctAnswers": [
      "In Prism Element under VM list and console"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-027",
    "source": "C",
    "questionNumber": 27,
    "question": "A critical alert appears for CVM memory usage. What should you do immediately?",
    "options": [
      "Disable memory-intensive features like deduplication temporarily",
      "Review which CVM is affected and check running processes",
      "Restart all CVMs simultaneously to clear memory",
      "Increase memory allocation for all CVMs in cluster"
    ],
    "correctAnswers": [
      "Review which CVM is affected and check running processes"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-028",
    "source": "C",
    "questionNumber": 28,
    "question": "Which license edition is required to use Nutanix Flow for microsegmentation?",
    "options": [
      "Starter edition includes Flow network security features",
      "All editions include Flow network security features",
      "Ultimate edition includes Flow network security features",
      "Pro edition includes Flow network security features"
    ],
    "correctAnswers": [
      "Ultimate edition includes Flow network security features"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-029",
    "source": "C",
    "questionNumber": 29,
    "question": "Which three components are part of the Nutanix storage stack? (Select three)",
    "options": [
      "Oplog provides write buffer for incoming I/O operations",
      "Distributed Storage Fabric handles data distribution and replication",
      "Extent Store manages data storage on SSDs and HDDs",
      "Virtual Switch manages network traffic between VMs"
    ],
    "correctAnswers": [
      "Oplog provides write buffer for incoming I/O operations",
      "Distributed Storage Fabric handles data distribution and replication",
      "Extent Store manages data storage on SSDs and HDDs"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-C-030",
    "source": "C",
    "questionNumber": 30,
    "question": "Your cluster has 4 nodes with RF2. What is the effective usable capacity if each node has 10TB raw?",
    "options": [
      "30TB usable capacity with RF2 configuration",
      "40TB usable capacity with RF2 configuration",
      "20TB usable capacity with RF2 configuration",
      "10TB usable capacity with RF2 configuration"
    ],
    "correctAnswers": [
      "20TB usable capacity with RF2 configuration"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-031",
    "source": "C",
    "questionNumber": 31,
    "question": "What is the purpose of the LCM pre-upgrade check?",
    "options": [
      "To automatically install all available updates immediately",
      "To schedule updates for future maintenance windows",
      "To backup all VMs before starting the upgrade",
      "To validate cluster health and compatibility before updates"
    ],
    "correctAnswers": [
      "To validate cluster health and compatibility before updates"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-032",
    "source": "C",
    "questionNumber": 32,
    "question": "Which hypervisor is developed and maintained directly by Nutanix?",
    "options": [
      "Citrix XenServer is Nutanix's native hypervisor solution",
      "Microsoft Hyper-V is Nutanix's native hypervisor solution",
      "VMware ESXi is Nutanix's native hypervisor solution",
      "Acropolis Hypervisor (AHV) is Nutanix's native hypervisor solution"
    ],
    "correctAnswers": [
      "Acropolis Hypervisor (AHV) is Nutanix's native hypervisor solution"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-033",
    "source": "C",
    "questionNumber": 33,
    "question": "Which LCM feature allows updates in environments without internet access?",
    "options": [
      "Dark Site mode enables updates without internet connectivity",
      "Auto-Update mode enables updates without internet connectivity",
      "Smart Update enables updates without internet connectivity",
      "Cloud Connect enables updates without internet connectivity"
    ],
    "correctAnswers": [
      "Dark Site mode enables updates without internet connectivity"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-034",
    "source": "C",
    "questionNumber": 34,
    "question": "What does the LCM inventory process discover in the cluster?",
    "options": [
      "User accounts and role-based access control permissions",
      "Current versions of software, firmware, and available updates",
      "Network configuration and VLAN assignments across hosts",
      "Active virtual machines and their resource consumption"
    ],
    "correctAnswers": [
      "Current versions of software, firmware, and available updates"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-035",
    "source": "C",
    "questionNumber": 35,
    "question": "What is the minimum replication factor (RF) supported in a Nutanix cluster?",
    "options": [
      "Replication Factor 3 provides dual failure tolerance",
      "Replication Factor 4 provides triple failure tolerance",
      "Replication Factor 1 provides no data redundancy",
      "Replication Factor 2 provides single failure tolerance"
    ],
    "correctAnswers": [
      "Replication Factor 2 provides single failure tolerance"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-036",
    "source": "C",
    "questionNumber": 36,
    "question": "What is the correct sequence to add a node to an existing cluster?",
    "options": [
      "Image Node > Cable Node > Discover Node > Expand Cluster",
      "Discover Node > Cable Node > Image Node > Expand Cluster",
      "Cable Node > Image Node > Discover Node > Expand Cluster",
      "Expand Cluster > Cable Node > Image Node > Discover Node"
    ],
    "correctAnswers": [
      "Cable Node > Image Node > Discover Node > Expand Cluster"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-037",
    "source": "C",
    "questionNumber": 37,
    "question": "Which VM configuration change requires the VM to be powered off?",
    "options": [
      "Increasing the number of virtual CPUs",
      "Changing the BIOS boot order settings",
      "Adding additional virtual disk storage",
      "Adding a new virtual network adapter"
    ],
    "correctAnswers": [
      "Changing the BIOS boot order settings"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-038",
    "source": "C",
    "questionNumber": 38,
    "question": "A VM is experiencing poor performance. What is the correct troubleshooting sequence?",
    "options": [
      "Check VM Metrics > Review Host Resources > Analyze Storage > Check Network",
      "Check Network > Analyze Storage > Review Host Resources > Check VM Metrics",
      "Analyze Storage > Check Network > Check VM Metrics > Review Host Resources",
      "Review Host Resources > Check VM Metrics > Check Network > Analyze Storage"
    ],
    "correctAnswers": [
      "Check VM Metrics > Review Host Resources > Analyze Storage > Check Network"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-039",
    "source": "C",
    "questionNumber": 39,
    "question": "Which LCM update type requires a rolling node reboot?",
    "options": [
      "Firmware updates require rolling node reboot process",
      "Hypervisor updates require rolling node reboot process",
      "Configuration updates require rolling node reboot process",
      "Software updates require rolling node reboot process"
    ],
    "correctAnswers": [
      "Hypervisor updates require rolling node reboot process"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-040",
    "source": "C",
    "questionNumber": 40,
    "question": "A cluster shows a warning alert for high memory usage. What is the first troubleshooting step?",
    "options": [
      "Disable memory overcommitment to reduce usage pressure",
      "Immediately add more nodes to increase memory capacity",
      "Review the alert details to identify which nodes are affected",
      "Restart all virtual machines to clear memory leaks"
    ],
    "correctAnswers": [
      "Review the alert details to identify which nodes are affected"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-041",
    "source": "C",
    "questionNumber": 41,
    "question": "Which three hypervisors are supported on Nutanix clusters? (Select three)",
    "options": [
      "VMware ESXi as third-party certified hypervisor",
      "Acropolis Hypervisor (AHV) as native Nutanix hypervisor",
      "Microsoft Hyper-V as third-party certified hypervisor",
      "Oracle VM Server as third-party certified hypervisor"
    ],
    "correctAnswers": [
      "VMware ESXi as third-party certified hypervisor",
      "Acropolis Hypervisor (AHV) as native Nutanix hypervisor",
      "Microsoft Hyper-V as third-party certified hypervisor"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-C-042",
    "source": "C",
    "questionNumber": 42,
    "question": "What is the correct sequence to perform a cluster health check in Prism?",
    "options": [
      "Access Health Dashboard > Run NCC Checks > Review Results > Export Report",
      "Export Report > Run NCC Checks > Access Health Dashboard > Review Results",
      "Review Results > Access Health Dashboard > Run NCC Checks > Export Report",
      "Run NCC Checks > Access Health Dashboard > Review Results > Export Report"
    ],
    "correctAnswers": [
      "Access Health Dashboard > Run NCC Checks > Review Results > Export Report"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-043",
    "source": "C",
    "questionNumber": 43,
    "question": "What does the Controller VM (CVM) do in a Nutanix cluster?",
    "options": [
      "Manages hypervisor kernel and system processes",
      "Handles physical network switching and routing",
      "Provides storage services and data management functions",
      "Runs guest virtual machines and user applications"
    ],
    "correctAnswers": [
      "Provides storage services and data management functions"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-044",
    "source": "C",
    "questionNumber": 44,
    "question": "You cannot access Prism Element web interface. What is the first troubleshooting step?",
    "options": [
      "Verify network connectivity to the cluster virtual IP",
      "Reboot all hypervisor hosts in the cluster",
      "Restart all Controller VMs in the cluster",
      "Reinstall Prism Central and resync the cluster"
    ],
    "correctAnswers": [
      "Verify network connectivity to the cluster virtual IP"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-045",
    "source": "C",
    "questionNumber": 45,
    "question": "You need to increase vCPUs on a running VM. What should you do first?",
    "options": [
      "Migrate VM to different host with available CPU",
      "Increase cluster CPU reservation for the VM",
      "Power off the virtual machine before making changes",
      "Enable hot-add CPU feature in VM configuration"
    ],
    "correctAnswers": [
      "Enable hot-add CPU feature in VM configuration"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-046",
    "source": "C",
    "questionNumber": 46,
    "question": "What is the correct sequence to perform a one-click upgrade from Prism?",
    "options": [
      "Check Compatibility > Download Update > Review Changes > Apply Upgrade",
      "Review Changes > Check Compatibility > Download Update > Apply Upgrade",
      "Apply Upgrade > Review Changes > Download Update > Check Compatibility",
      "Download Update > Check Compatibility > Apply Upgrade > Review Changes"
    ],
    "correctAnswers": [
      "Check Compatibility > Download Update > Review Changes > Apply Upgrade"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-047",
    "source": "C",
    "questionNumber": 47,
    "question": "Which VM operation can be performed without powering off the VM? (Select two)",
    "options": [
      "Increasing memory if hot-add is enabled",
      "Adding a new virtual disk to the VM",
      "Changing the VM's network adapter type",
      "Removing an existing virtual disk from the VM"
    ],
    "correctAnswers": [
      "Increasing memory if hot-add is enabled",
      "Adding a new virtual disk to the VM"
    ],
    "multiple": true,
    "explanation": ""
  },
  {
    "id": "NCA610-C-048",
    "source": "C",
    "questionNumber": 48,
    "question": "Which storage container property is set at creation and cannot be changed?",
    "options": [
      "Deduplication schedule is permanent at container creation",
      "Container name is permanent at container creation",
      "Replication Factor (RF) is permanent at container creation",
      "Compression ratio setting is permanent at container creation"
    ],
    "correctAnswers": [
      "Container name is permanent at container creation"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-049",
    "source": "C",
    "questionNumber": 49,
    "question": "What does the LCM \"Scheduled\" status indicate for an update?",
    "options": [
      "The update is set to run at a specified time",
      "The update is currently downloading required packages",
      "The update has completed successfully on all nodes",
      "The update is waiting for cluster resources to become available"
    ],
    "correctAnswers": [
      "The update is set to run at a specified time"
    ],
    "multiple": false,
    "explanation": ""
  },
  {
    "id": "NCA610-C-050",
    "source": "C",
    "questionNumber": 50,
    "question": "What does RF3 provide compared to RF2 in a Nutanix cluster?",
    "options": [
      "RF3 provides lower storage overhead and more capacity",
      "RF3 provides tolerance for two node failures simultaneously",
      "RF3 provides faster rebuild times after node failure",
      "RF3 provides higher performance but same data protection"
    ],
    "correctAnswers": [
      "RF3 provides tolerance for two node failures simultaneously"
    ],
    "multiple": false,
    "explanation": ""
  }
];

// Compatibilidad directa con el simulador si se usa este archivo como data/questions.js
window.NCA_QUESTIONS = window.NCA_QUESTIONS_TEST_C;
