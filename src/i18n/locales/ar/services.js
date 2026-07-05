const services = {
    hero: {
        breadcrumbs: [ 'الرئيسية', 'الحلول', 'الطاقة' ],
        serviceId: 'SERVICE ID: #PWR-002',
        titleLine: 'بنية طاقة',
        titleAccent: 'حرجة وموثوقة',
        description: 'تصمم وتنفذ Focus Trading & Contracting حلول الطاقة والهندسة الصناعية للعمليات التي تحتاج جاهزية مستمرة.',
        chips: [ 'مولدات ديزل 20-3000 KVA', 'ISO 9001 / ISO 45001', 'جاهز للأنظمة الهجينة' ],
        ctaPrimary: 'طلب التفاصيل الفنية',
        ctaSecondary: 'عرض المشاريع',
        stats: [
            { value: '99.99%', label: 'ضمان الجاهزية' },
            { value: '+50', label: 'مشروع عالمي' },
            { value: '1.2 GW', label: 'إجمالي القدرة المسلّمة' }
        ],
        cardLabel: 'مراقبة لحظية',
        dataRows: [
            { key: 'الحمل', value: '84%' },
            { key: 'الحرارة', value: '62°C' },
            { key: 'التردد', value: '50.0Hz' }
        ],
        diagram: {
            core: 'CORE',
            output: 'OUTPUT: 800V',
            input: 'INPUT: HYBRID'
        }
    },
    overview: {
        sidebarTitle: 'نظرة عامة على الخدمات',
        sidebarSubtitle: 'اختر مجال الخدمة للاطلاع على التفاصيل',
        supportTitle: 'تحتاج مساعدة؟',
        supportLink: 'تواصل مع الدعم',
        downloadButton: 'ملف المواصفات الفنية',
        diagramTexts: {
            diesel: {
                generator: 'وحدة المولد',
                output: 'خرج الطاقة',
                fuel: 'مصدر الوقود'
            },
            sync: {
                panel: 'لوحة التزامن',
                gen1: 'مولد 1',
                gen2: 'مولد 2',
                load: 'حمل مشترك'
            },
            testing: {
                station: 'محطة الاختبار',
                loadBank: 'بنك الأحمال',
                metrics: 'بيانات الأداء'
            },
            commissioning: {
                site: 'التركيب بالموقع',
                verify: 'التحقق من النظام',
                ready: 'جاهز للتشغيل'
            },
            training: {
                docs: 'التوثيق',
                operator: 'المُشَغِّل',
                knowledge: 'نقل المعرفة'
            },
            support: {
                maintenance: 'الصيانة',
                parts: 'قطع الغيار',
                service: 'دعم على مدار الساعة'
            },
            fallback: {
                system: 'النظام'
            }
        },
        services: [
            {
                id: 'diesel-generator',
                icon: 'bolt',
                title: 'توريد مولدات الديزل',
                subtitle: 'حلول طاقة موثوقة',
                serviceId: '#PWR-01',
                heading: 'مولدات ديزل عالية الجودة',
        description: 'تقوم Focus بتوريد مولدات ديزل عالية الجودة تتراوح من 30 كيلو فولت أمبير إلى 3.75 ميجا فولت أمبير، وتناسب المستشفيات والمنشآت الحيوية والمصانع ومشاريع البنية التحتية. صُممت مُولّداتنا للعمل في البيئات القاسية في مصر والخليج.',
        stats: [
                    { icon: 'offline_bolt', label: 'نطاق القدرة', value: '30-3750', unit: 'KVA', progress: 100 },
                    { icon: 'thermostat', label: 'مصمم لـ', value: 'بيئات', unit: 'قاسية', subtext: 'حرارة عالية وغبار' },
                    { icon: 'local_gas_station', label: 'نظام الوقود', value: 'متكامل', unit: '', subtext: 'تشغيل مستمر' }
                ],
                diagramLabels: [ 'FIG 2.1 - DIESEL GENSET', 'POWER OUTPUT LOOP' ],
                diagramType: 'diesel'
            },
            {
                id: 'synchronization',
                icon: 'sync',
                title: 'التزامن ومشاركة الأحمال',
                subtitle: 'أنظمة مشاركة الأحمال',
                serviceId: '#PWR-02',
                heading: 'لوحات تزامن المولدات',
                description: 'نصمم ونورد لوحات تزامن المولدات التي تتيح تشغيل مولدات متعددة بكفاءة على التوازي، مما يوفر مشاركة متوازنة للأحمال، وتوافرية عالية، وإمكانية توسيع النظام عند الحاجة.',
                stats: [
                    { icon: 'balance', label: 'مشاركة الأحمال', value: 'متوازنة', unit: '', progress: 100 },
                    { icon: 'library_add', label: 'التوسعة', value: 'قابلة للتوسع', unit: '', subtext: 'ترقيات مستقبلية سهلة' },
                    { icon: 'speed', label: 'الأداء', value: 'مُحَسَّن', unit: '', subtext: 'كفاءة عالية' }
                ],
                diagramLabels: [ 'FIG 2.2 - SYNC PANEL ARCHITECTURE', 'PARALLEL OPERATION' ],
                diagramType: 'sync'
            },
            {
                id: 'testing',
                icon: 'fact_check',
                title: 'اختبار المصنع (FAT)',
                subtitle: 'ضمان الجودة',
                serviceId: '#QA-01',
                heading: 'اختبار المصنع وضمان الجودة',
                description: 'تخضع جميع المعدات لاختبارات وفحوصات داخل المصنع قبل التوريد. يشمل ذلك اختبارات التحميل الكاملة، والتحقق من الأداء، وضمان الامتثال للمعايير الدولية.',
                stats: [
                    { icon: 'battery_charging_full', label: 'نطاق الاختبار', value: 'حمل كامل', unit: '', progress: 100 },
                    { icon: 'workspace_premium', label: 'الامتثال', value: 'عالمي', unit: '', subtext: 'المعايير الدولية' },
                    { icon: 'speed', label: 'التشغيل', value: 'أسرع', unit: '', subtext: 'مخاطر أقل في الموقع' }
                ],
                diagramLabels: [ 'FIG 2.3 - FAT PROCESS', 'PERFORMANCE VERIFICATION' ],
                diagramType: 'testing'
            },
            {
                id: 'installation',
                icon: 'construction',
                title: 'التركيب والتشغيل',
                subtitle: 'النشر في الموقع',
                serviceId: '#OPS-01',
                heading: 'خدمات التركيب والتشغيل التجريبي',
                description: 'نقدم خدمات كاملة للتركيب والتشغيل في الموقع، مما يضمن عمل الأنظمة بشكل صحيح من اليوم الأول. يتضمن ذلك الإشراف على التركيب والتحقق الكهروميكانيكي.',
                stats: [
                    { icon: 'engineering', label: 'الإشراف', value: 'خبراء', unit: '', progress: 100 },
                    { icon: 'verified', label: 'التحقق', value: 'شامل', unit: '', subtext: 'فحص كهروميكانيكي' },
                    { icon: 'task_alt', label: 'اختبار الأحمال', value: 'مُعتمد', unit: '', subtext: 'تحسين النظام' }
                ],
                diagramLabels: [ 'FIG 2.4 - COMMISSIONING WORKFLOW', 'SITE STARTUP' ],
                diagramType: 'commissioning'
            },
            {
                id: 'training',
                icon: 'school',
                title: 'التدريب والتسليم',
                subtitle: 'نقل المعرفة',
                serviceId: '#OPS-02',
                heading: 'تدريب المشغلين والتسليم',
                description: 'لضمان جاهزية فريقك لتشغيل النظام، نقدم تدريباً شاملاً للمشغلين، وإرشادات الصيانة، ونسلّمك المستندات التوثيقية بالكامل.',
                stats: [
                    { icon: 'person', label: 'التدريب', value: 'للمشغل', unit: '', progress: 100 },
                    { icon: 'book', label: 'الإرشادات', value: 'للصيانة', unit: '', subtext: 'تعليمات واضحة' },
                    { icon: 'folder_open', label: 'التوثيق', value: 'كامل', unit: '', subtext: 'تسليم شامل' }
                ],
                diagramLabels: [ 'FIG 2.5 - HANDOVER PROCESS', 'TEAM READINESS' ],
                diagramType: 'training'
            },
            {
                id: 'support',
                icon: 'support_agent',
                title: 'دعم ما بعد البيع',
                subtitle: 'خدمات الصيانة',
                serviceId: '#SVC-01',
                heading: 'خدمات دعم ما بعد البيع والصيانة',
                description: 'دعم وصيانة موثوقة لضمان استمرارية عمل النظام على المدى الطويل، يشمل عقود الصيانة الوقائية، تقديم الدعم في الحالات الطارئة، وتوفير قطع الغيار الأصلية.',
                stats: [
                    { icon: 'build', label: 'الصيانة', value: 'وقائية', unit: '', progress: 100 },
                    { icon: 'emergency', label: 'الدعم', value: 'طوارئ', unit: '', subtext: 'استجابة سريعة' },
                    { icon: 'inventory', label: 'قطع الغيار', value: 'متوفرة', unit: '', subtext: 'مكونات أصلية' }
                ],
                diagramLabels: [ 'FIG 2.6 - SUPPORT NETWORK', 'LONG-TERM RELIABILITY' ],
                diagramType: 'support'
            }
        ]
    },
    whyFocus: {
        badge: 'ميزة استراتيجية',
        title: 'لماذا',
        titleAccent: 'Focus',
        lead: 'نتائج هندسية مثبتة بأرقام أداء حقيقية.',
        description: 'تجمع Focus Trading & Contracting بين توليد الطاقة والأتمتة والتنفيذ الكهروميكانيكي ضمن معايير جودة وسلامة ثابتة.',
        statValues: [ '6+', '50+', '75+' ],
        statLabels: [ 'سنوات خبرة', 'مشروع عالمي', 'عميل راضٍ' ],
        sectionLabel: 'تميّز هندسي',
        sectionIntro: 'يشمل نطاقنا الفني مولدات 20-3000 KVA وأنظمة PLC وSCADA وتكامل MEP، مدعوماً بـ 1.2 GW قدرة مسلّمة وضمان جاهزية 99.99%.',
        items: [
            {
                id: 1,
                number: '01',
                title: 'تغطية القدرة الكهربائية',
                description: 'يغطي نطاق المولدات لدينا 20 KVA إلى 3000 KVA للتشغيل الأساسي والاحتياطي.',
                features: [
                    { icon: 'check_circle', text: 'تغطية مولدات ديزل 20-3000 KVA' },
                    { icon: 'check_circle', text: 'تكامل ATS ومزامنة الشبكة' }
                ],
                metric: { value: '20-3000', unit: 'KVA', label: 'نطاق المولدات' }
            },
            {
                id: 2,
                number: '02',
                title: 'تكامل الأتمتة',
                description: 'نصمم معماريات PLC وSCADA وHMI لتحسين التحكم اللحظي ووضوح التشغيل الصناعي.',
                features: [
                    { icon: 'hub', text: 'برمجة PLC ومنطق التحكم' },
                    { icon: 'sync', text: 'تكامل SCADA وHMI' }
                ],
                metric: { value: 'PLC', unit: '/SCADA', label: 'نطاق التحكم' }
            },
            {
                id: 3,
                number: '03',
                title: 'معايير السلامة والجودة',
                description: 'نلتزم بمعايير ISO 9001 وISO 45001 وISO 8528 للمولدات مع الحفاظ على ضمان جاهزية 99.99%.',
                features: [
                    { icon: 'shield_with_heart', text: 'امتثال السلامة ISO 45001' },
                    { icon: 'workspace_premium', text: 'مواءمة ISO 9001 وISO 8528' }
                ],
                metric: { value: '99.99%', unit: '', label: 'ضمان الجاهزية' }
            }
        ],
        footerVersion: 'FOCUS T&C',
        footerStatus: 'النظام نشط'
    },
    workflow: {
        coordinates: [ 'COORD: 45.922, 12.001', 'SYS: ONLINE', 'GRID: ACTIVE' ],
        scale: [ 'SCALE: 1:100', 'REF: ENG-FLOW-V5', 'STATUS: MONITORING' ],
        badge: 'هيكل النظام',
        title: 'آلية التنفيذ',
        description: 'مسار التنفيذ لدينا يبدأ من الهندسة ويمر بالنشر والتشغيل ثم الصيانة طويلة المدى.',
        activeSuffix: ' // ACTIVE',
        phaseActive: 'المرحلة: نشطة',
        phaseLabel: 'المرحلة',
        durationLabel: 'المدة',
        techStackLabel: 'التقنيات',
        viewDetails: 'عرض التفاصيل',
        prev: 'السابق',
        next: 'التالي',
        steps: [
            {
                id: 1,
                icon: 'chat_bubble_outline',
                title: 'التقييم الهندسي',
                subtitle: 'تحديد النطاق',
                description: 'نبدأ بتحديد متطلبات المشروع وظروف الموقع وأولويات التشغيل قبل الدخول في التصميم.',
                duration: '1-2 أسبوع',
                techStack: 'معاينة موقع / مراجعة فنية'
            },
            {
                id: 2,
                icon: 'settings',
                title: 'هندسة الأنظمة',
                subtitle: 'تكامل التصميم',
                description: 'نستكمل تصميم سعات المولدات ومعمارية PLC وSCADA وتنسيق MEP لمرحلة التنفيذ.',
                duration: '2-4 أسابيع',
                techStack: 'حزم تصميم / معمارية تحكم'
            },
            {
                id: 3,
                icon: 'construction',
                title: 'النشر',
                subtitle: 'التركيب',
                description: 'تقوم الفرق الميدانية بتركيب ودمج الأنظمة الكهروميكانيكية ولوحات التحكم والبنية الكهربائية في الموقع.',
                duration: '2-6 أسابيع',
                techStack: 'تنفيذ موقعي / إعداد PLC'
            },
            {
                id: 4,
                icon: 'published_with_changes',
                title: 'التشغيل التجريبي',
                subtitle: 'التحقق',
                description: 'نجري اختبارات متكاملة للتأكد من الأداء ومنطق التحكم وجاهزية النظام قبل التسليم.',
                duration: '1-2 أسبوع',
                techStack: 'اختبارات قبول / تحقق أداء'
            },
            {
                id: 5,
                icon: 'support_agent',
                title: 'الصيانة',
                subtitle: 'الصيانة',
                description: 'الصيانة المستمرة والدعم الفني يحافظان على استقرار التشغيل وارتفاع الجاهزية على المدى الطويل.',
                duration: 'مستمر',
                techStack: 'صيانة وقائية / دعم خدمة'
            }
        ],
        metrics: [
            { id: 'A1', icon: 'calendar_month', value: '6+', label: 'سنوات الخبرة' },
            { id: 'B2', icon: 'work', value: '50+', label: 'المشاريع العالمية' },
            { id: 'C3', icon: 'verified_user', value: '99.99%', label: 'ضمان الجاهزية' }
        ],
        cta: {
            titleLine: 'جاهز لدعم',
            titleHighlight: 'مشروعك القادم؟',
            description: 'تعاون مع Focus Trading & Contracting في حلول المولدات والأتمتة والتنفيذ الكهروميكانيكي المصممة للأداء الموثوق.',
            primary: 'طلب استشارة',
            secondary: 'عرض المشاريع'
        }
    }
};

export default services;
