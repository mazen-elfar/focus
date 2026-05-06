const services = {
    hero: {
        breadcrumbs: [ 'Home', 'Solutions', 'Power' ],
        serviceId: 'SERVICE ID: #PWR-002',
        titleLine: 'Mission-Critical',
        titleAccent: 'Power Infrastructure',
        description: 'Focus Trading & Contracting designs and delivers power and industrial engineering solutions for operations that need to stay online.',
        chips: [ '20-3000 KVA Diesel Generators', 'ISO 9001 / ISO 45001', 'Hybrid Ready' ],
        ctaPrimary: 'Request Technical Details',
        ctaSecondary: 'View Projects',
        stats: [
            { value: '99.99%', label: 'Uptime Guarantee' },
            { value: '50+', label: 'Global Projects' },
            { value: '1.2 GW', label: 'Total Power Delivered' }
        ],
        cardLabel: 'Live Monitoring',
        dataRows: [
            { key: 'Load', value: '84%' },
            { key: 'Temp', value: '62°C' },
            { key: 'Freq', value: '50.0Hz' }
        ],
        diagram: {
            core: 'CORE',
            output: 'OUTPUT: 800V',
            input: 'INPUT: HYBRID'
        }
    },
    overview: {
        sidebarTitle: 'Services Overview',
        sidebarSubtitle: 'Choose a service area to explore details',
        supportTitle: 'Need Assistance?',
        supportLink: 'Contact Support',
        downloadButton: 'Tech Spec PDF',
        diagramTexts: {
            diesel: {
                generator: 'GENSET UNIT',
                output: 'POWER OUTPUT',
                fuel: 'FUEL SUPPLY'
            },
            sync: {
                panel: 'SYNC PANEL',
                gen1: 'GEN-01',
                gen2: 'GEN-02',
                load: 'SHARED LOAD'
            },
            testing: {
                station: 'TEST STATION',
                loadBank: 'LOAD BANK',
                metrics: 'PERFORMANCE DATA'
            },
            commissioning: {
                site: 'SITE INSTALLATION',
                verify: 'SYSTEM VERIFICATION',
                ready: 'READY FOR STARTUP'
            },
            training: {
                docs: 'DOCUMENTATION',
                operator: 'OPERATOR',
                knowledge: 'KNOWLEDGE TRANSFER'
            },
            support: {
                maintenance: 'MAINTENANCE',
                parts: 'SPARE PARTS',
                service: '24/7 SUPPORT'
            },
            fallback: {
                system: 'SYSTEM'
            }
        },
        services: [
            {
                id: 'diesel-generator',
                icon: 'bolt',
                title: 'Diesel Generator Supply',
                subtitle: 'RELIABLE POWER SOLUTIONS',
                serviceId: '#PWR-01',
                heading: 'High-Quality Diesel Generators',
                description: 'Focus Co. supplies high-quality diesel generators ranging from 30 kVA to 3.75 MVA, suitable for hospitals, critical facilities, construction sites, and industrial plants. Our generators are engineered for harsh conditions across Egypt and the Gulf region.',
                stats: [
                    { icon: 'offline_bolt', label: 'Power Range', value: '30k-3.75M', unit: 'VA', progress: 100 },
                    { icon: 'thermostat', label: 'Engineered For', value: 'Harsh', unit: 'Env', subtext: 'High Temp & Dusty Areas' },
                    { icon: 'local_gas_station', label: 'Fuel System', value: 'Integrated', unit: '', subtext: 'Continuous Operation' }
                ],
                diagramLabels: [ 'FIG 2.1 - DIESEL GENSET', 'POWER OUTPUT LOOP' ],
                diagramType: 'diesel'
            },
            {
                id: 'synchronization',
                icon: 'sync',
                title: 'Generator Synchronization',
                subtitle: 'LOAD SHARING SYSTEMS',
                serviceId: '#PWR-02',
                heading: 'Generator Synchronization Panels',
                description: 'We design and supply generator synchronization panels that allow multiple generators to operate efficiently in parallel, delivering balanced load sharing, built-in redundancy, and scalable system expansion.',
                stats: [
                    { icon: 'balance', label: 'Load Sharing', value: 'Balanced', unit: '', progress: 100 },
                    { icon: 'library_add', label: 'Expansion', value: 'Scalable', unit: '', subtext: 'Easy Future Upgrades' },
                    { icon: 'speed', label: 'Performance', value: 'Optimized', unit: '', subtext: 'High Efficiency' }
                ],
                diagramLabels: [ 'FIG 2.2 - SYNC PANEL ARCHITECTURE', 'PARALLEL OPERATION' ],
                diagramType: 'sync'
            },
            {
                id: 'testing',
                icon: 'fact_check',
                title: 'Factory Testing (FAT)',
                subtitle: 'QUALITY ASSURANCE',
                serviceId: '#QA-01',
                heading: 'Factory Testing & Quality Assurance',
                description: 'All equipment undergoes rigorous factory testing and inspection before delivery. We perform full load testing, performance verification, and assure compliance with international standards.',
                stats: [
                    { icon: 'battery_charging_full', label: 'Testing Scope', value: 'Full Load', unit: '', progress: 100 },
                    { icon: 'workspace_premium', label: 'Compliance', value: 'Global', unit: 'Stds', subtext: 'International Standards' },
                    { icon: 'speed', label: 'Commissioning', value: 'Faster', unit: '', subtext: 'Reduced Site Risks' }
                ],
                diagramLabels: [ 'FIG 2.3 - FAT PROCESS', 'PERFORMANCE VERIFICATION' ],
                diagramType: 'testing'
            },
            {
                id: 'installation',
                icon: 'construction',
                title: 'Installation & Commissioning',
                subtitle: 'SITE DEPLOYMENT',
                serviceId: '#OPS-01',
                heading: 'Installation & Commissioning Services',
                description: 'We provide complete installation and commissioning services, ensuring systems operate correctly from day one. This includes installation supervision, electrical and mechanical verification, and protection system testing.',
                stats: [
                    { icon: 'engineering', label: 'Supervision', value: 'Expert', unit: '', progress: 100 },
                    { icon: 'verified', label: 'Verification', value: 'Full', unit: '', subtext: 'Electromechanical Check' },
                    { icon: 'task_alt', label: 'Load Testing', value: 'Validated', unit: '', subtext: 'System Optimization' }
                ],
                diagramLabels: [ 'FIG 2.4 - COMMISSIONING WORKFLOW', 'SITE STARTUP' ],
                diagramType: 'commissioning'
            },
            {
                id: 'training',
                icon: 'school',
                title: 'Training & Handover',
                subtitle: 'KNOWLEDGE TRANSFER',
                serviceId: '#OPS-02',
                heading: 'Operator Training & Handover',
                description: 'Ensuring your team is ready to operate the equipment. We offer comprehensive operator training, maintenance guidance, and complete documentation delivery.',
                stats: [
                    { icon: 'person', label: 'Training', value: 'Operator', unit: '', progress: 100 },
                    { icon: 'book', label: 'Guidance', value: 'Maint.', unit: '', subtext: 'Clear Instructions' },
                    { icon: 'folder_open', label: 'Documentation', value: 'Complete', unit: '', subtext: 'Full Delivery' }
                ],
                diagramLabels: [ 'FIG 2.5 - HANDOVER PROCESS', 'TEAM READINESS' ],
                diagramType: 'training'
            },
            {
                id: 'support',
                icon: 'support_agent',
                title: 'After-Sales Support',
                subtitle: 'MAINTENANCE SERVICES',
                serviceId: '#SVC-01',
                heading: 'After-Sales Support & Maintenance',
                description: 'Dependable after-sales support and maintenance services to ensure long-term system reliability. We offer preventive maintenance contracts, emergency support, spare parts supply, and technical troubleshooting.',
                stats: [
                    { icon: 'build', label: 'Maintenance', value: 'Preventive', unit: '', progress: 100 },
                    { icon: 'emergency', label: 'Support', value: 'Emergency', unit: '', subtext: 'Fast Response' },
                    { icon: 'inventory', label: 'Spare Parts', value: 'Available', unit: '', subtext: 'Original Components' }
                ],
                diagramLabels: [ 'FIG 2.6 - SUPPORT NETWORK', 'LONG-TERM RELIABILITY' ],
                diagramType: 'support'
            }
        ]
    },
    whyFocus: {
        badge: 'Strategic Advantage',
        title: 'WHY',
        titleAccent: 'FOCUS',
        lead: 'Proven engineering, measured by real delivery outcomes.',
        description: 'Focus brings power generation, automation, and electromechanical execution together under consistent quality and safety standards.',
        statValues: [ '6+', '50+', '75+' ],
        statLabels: [ 'Years Experience', 'Global Projects', 'Satisfied Clients' ],
        sectionLabel: 'Engineering Excellence',
        sectionIntro: 'Our scope includes 20-3000 KVA generators, PLC and SCADA systems, and MEP integration, backed by 1.2 GW delivered and a 99.99% uptime commitment.',
        items: [
            {
                id: 1,
                number: '01',
                title: 'Power Capacity Coverage',
                description: 'Our generator portfolio covers 20 KVA to 3000 KVA for both continuous-duty and backup applications.',
                features: [
                    { icon: 'check_circle', text: '20-3000 KVA diesel generator coverage' },
                    { icon: 'check_circle', text: 'ATS, synchronization Panel and all related accessories' }
                ],
                metric: { value: '20-3000', unit: 'KVA', label: 'Generator Range' }
            },
            {
                id: 2,
                number: '02',
                title: 'Automation Integration',
                description: 'We design PLC, SCADA, and HMI architectures that keep industrial processes visible and under control.',
                features: [
                    { icon: 'hub', text: 'PLC programming and control logic' },
                    { icon: 'sync', text: 'SCADA and HMI integration' }
                ],
                metric: { value: 'PLC', unit: '/SCADA', label: 'Control Scope' }
            },
            {
                id: 3,
                number: '03',
                title: 'Safety and Quality Standards',
                description: 'We align delivery with ISO 9001, ISO 45001, and ISO 8528 standards while maintaining a 99.99% uptime commitment.',
                features: [
                    { icon: 'shield_with_heart', text: 'ISO 45001 safety compliance' },
                    { icon: 'workspace_premium', text: 'ISO 9001 and ISO 8528 alignment' }
                ],
                metric: { value: '99.99%', unit: '', label: 'Uptime Guarantee' }
            }
        ],
        footerVersion: 'FOCUS T&C',
        footerStatus: 'System Active'
    },
    workflow: {
        coordinates: [ 'COORD: 45.922, 12.001', 'SYS: ONLINE', 'GRID: ACTIVE' ],
        scale: [ 'SCALE: 1:100', 'REF: ENG-FLOW-V5', 'STATUS: MONITORING' ],
        badge: 'System Architecture',
        title: '05 // ENGINEERED FLOW',
        description: 'Our delivery path moves from engineering to deployment, commissioning, and long-term maintenance.',
        activeSuffix: ' // ACTIVE',
        phaseActive: 'PHASE: ACTIVE',
        phaseLabel: 'PHASE',
        durationLabel: 'Duration',
        techStackLabel: 'Tech Stack',
        viewDetails: 'View Details',
        prev: 'Prev',
        next: 'Next',
        steps: [
            {
                id: 1,
                icon: 'chat_bubble_outline',
                title: 'Engineering Assessment',
                subtitle: 'Scope Definition',
                description: 'We align on requirements, site conditions, and priorities before design begins.',
                duration: '1-2 Weeks',
                techStack: 'Site Audit / Technical Review'
            },
            {
                id: 2,
                icon: 'settings',
                title: 'System Engineering',
                subtitle: 'Design Integration',
                description: 'Our teams finalize generator sizing, PLC and SCADA architecture, and MEP coordination for implementation.',
                duration: '2-4 Weeks',
                techStack: 'Design Packages / Control Architecture'
            },
            {
                id: 3,
                icon: 'construction',
                title: 'Deployment',
                subtitle: 'Installation',
                description: 'Field teams install and integrate electromechanical systems, control panels, and power infrastructure on site.',
                duration: '2-6 Weeks',
                techStack: 'On-Site Execution / PLC Commission Setup'
            },
            {
                id: 4,
                icon: 'published_with_changes',
                title: 'Commissioning',
                subtitle: 'Validation',
                description: 'Integrated testing confirms performance, control logic, and full system readiness before handover.',
                duration: '1-2 Weeks',
                techStack: 'Acceptance Testing / Performance Checks'
            },
            {
                id: 5,
                icon: 'support_agent',
                title: 'Maintenance',
                subtitle: 'Maintenance',
                description: 'Ongoing maintenance and support keep uptime high and operations stable over the long term.',
                duration: 'Ongoing',
                techStack: 'Preventive Maintenance / Service Support'
            }
        ],
        metrics: [
            { id: 'A1', icon: 'calendar_month', value: '6+', label: 'Years Experience' },
            { id: 'B2', icon: 'work', value: '50+', label: 'Global Projects' },
            { id: 'C3', icon: 'verified_user', value: '99.99%', label: 'Uptime Guarantee' }
        ],
        cta: {
            titleLine: 'Ready to Power Your',
            titleHighlight: 'Next Project?',
            description: 'Partner with Focus for generator, automation, and electromechanical solutions built for reliable performance.',
            primary: 'Request a Consultation',
            secondary: 'View Projects'
        }
    }
};

export default services;
