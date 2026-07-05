const about = {
    section1: {
        status: 'حالة النظام: يعمل',
        titlePrefix: 'رحلتنا ',
        titleHighlight: '',
        description: 'عرض زمني واضح لكيف تطورت Focus، وتوسعت قدراتها، ورفعت جودة التنفيذ الهندسي عاماً بعد عام.',
        stats: [
            { label: 'محطات رئيسية', value: '+42' },
            { label: 'عقد تشغيل نشطة', value: '128' },
            { label: 'معدل الدقة', value: '99.9%' }
        ],
        milestones: [
            {
                year: '2020',
                title: 'التأسيس في مصر',
                description: 'تأسست شركة Focus Trading & Contracting في مصر، وكانت هذه بداية مسارنا الهندسي.',
                icon: 'foundation',
                protocols: [ 'FTC-01: التأسيس', 'دخول السوق المصري' ],
                reverse: false
            },
            {
                year: '2021',
                title: 'تعزيز العمليات',
                description: 'طورنا الأنظمة الداخلية وآليات التشغيل لدعم نمو حجم المشاريع وتعقيدها.',
                icon: 'architecture',
                protocols: [ 'الكفاءة التشغيلية', 'تحسين العمليات' ],
                reverse: true
            },
            {
                year: '2022',
                title: 'إنشاء قسم خدمات ما بعد البيع',
                description: 'أطلقنا قسماً متخصصاً لخدمات ما بعد البيع لتوفير صيانة ودعم فني مستمرين.',
                icon: 'engineering',
                protocols: [ 'نجاح العملاء', 'الدعم الفني' ],
                reverse: false
            },
            {
                year: '2023',
                title: 'رائد في حلول الطاقة',
                description: 'ترسخ موقع Focus كأحد أبرز مزودي حلول الطاقة في السوق المصري مع تحقيق مؤشرات أداء قوية.',
                icon: 'bolt',
                protocols: [ 'ريادة السوق', 'معايير الطاقة' ],
                reverse: true
            },
            {
                year: '2024',
                title: 'التوسع في المملكة العربية السعودية',
                description: 'توسعنا إلى المملكة العربية السعودية وأسّسنا مقراً إقليمياً في الدمام.',
                icon: 'public',
                protocols: [ 'التوسع الإقليمي', 'عمليات السعودية' ],
                reverse: false
            },
            {
                year: '2025',
                title: 'الشراكة مع صناعات الفداغي',
                description: 'أبرمنا شراكة استراتيجية مع صناعات الفداغي لدعم تنفيذ مشاريع صناعية أكبر حجماً.',
                icon: 'handshake',
                protocols: [ 'تحالف استراتيجي', 'نطاق صناعي' ],
                reverse: true,
                highlight: true
            }
        ],
        blueprint: [
            'المرجع: FTC-SYSTEM-001',
            'الإحداثيات: 25.2769°N, 55.2962°E',
            'المقياس: 1:1,000,000'
        ]
    },
    section2: {
        domainLabel: 'المجالات التقنية',
        titleStart: 'الخبرات ',
        titleHighlight: 'والقدرات',
        intro: 'أقسامنا المتخصصة تقدم حلولاً هندسية عملية في الطاقة والأتمتة والبنية الصناعية حسب متطلبات كل مشروع.',
        downloadSpecs: 'تحميل المواصفات الفنية',
        metricsHeading: 'المؤشرات الفنية',
        tabs: [
            { id: 'power', label: 'أنظمة الطاقة', icon: 'bolt' },
            { id: 'electro', label: 'كهروميكانيك', icon: 'settings_input_component' },
            { id: 'auto', label: 'الأتمتة', icon: 'precision_manufacturing' },
            { id: 'infra', label: 'البنية التحتية', icon: 'foundation' }
        ],
        content: {
            power: {
                title: 'بنية طاقة متقدمة',
                badge: 'تخصص أساسي',
                description: 'نصمم وننفذ بنية كهربائية بمستويات موثوقية عالية، مع جاهزية لاعتمادات Tier IV وإدارة طاقة أكثر كفاءة.',
                features: [
                    { title: 'تصميم المحطات', desc: 'هندسة متكاملة لشبكات التوزيع عالية الجهد من التخطيط حتى التشغيل.', icon: 'subtitles' },
                    { title: 'شبكة مستدامة', desc: 'دمج مصادر متجددة وأنظمة قياس ذكية لتحسين الاستهلاك.', icon: 'energy_savings_leaf' },
                    { title: 'امتثال Tier IV', desc: 'متطلبات امتثال مدروسة للمرافق ذات الحساسية العالية.', icon: 'verified_user' },
                    { title: 'صيانة HV/LV', desc: 'دعم مستمر ومتابعة وقائية للحفاظ على استقرار الأداء.', icon: 'engineering' }
                ],
                metrics: [
                    { value: '99.99%', label: 'موثوقية النظام', desc: 'متوسط الجاهزية المحقق عبر أكثر من 45 مشروعاً مؤسسياً.', icon: 'radar' },
                    { value: '500MW+', label: 'قدرة مُدارة', desc: 'إجمالي قدرة التوزيع التي قمنا بهندستها ونديرها حالياً.', icon: 'power' },
                    { value: '12', label: 'مواقع Tier IV عالمية', desc: 'مواقع مراكز بيانات عالية الاعتمادية في أسواق متعددة.', icon: 'public' }
                ]
            },
            electro: {
                title: 'حلول كهروميكانيكية',
                badge: 'مستوى صناعي',
                description: 'أنظمة ميكانيكية وكهربائية متكاملة للمشاريع الكبيرة بهدف تشغيل أكثر انسيابية وكفاءة أفضل للطاقة.',
                features: [
                    { title: 'أنظمة HVAC', desc: 'تحكم مناخي دقيق للبيئات الصناعية ومراكز البيانات.', icon: 'ac_unit' },
                    { title: 'محطات الضخ', desc: 'حلول ضخ وتوزيع سوائل بسعات تشغيلية عالية.', icon: 'water_drop' }
                ],
                metrics: [
                    { value: '150+', label: 'وحدة مركبة', desc: 'وحدات كهروميكانيكية عالية الأداء تم تركيبها وصيانتها.', icon: 'settings' }
                ]
            },
            auto: {
                title: 'أتمتة صناعية',
                badge: 'تقنية ذكية',
                description: 'أنظمة تحكم وأتمتة ترفع كفاءة خطوط الإنتاج وتعزز السلامة عبر مراقبة ذكية مستمرة.',
                features: [
                    { title: 'أنظمة SCADA', desc: 'حلول مراقبة وتحكم وإدارة بيانات لحظية.', icon: 'monitoring' },
                    { title: 'تكامل الروبوتات', desc: 'تحسين تدفق العمل من خلال دمج حلول روبوتية متقدمة.', icon: 'smart_toy' }
                ],
                metrics: [
                    { value: '40%', label: 'زيادة الكفاءة', desc: 'متوسط التحسن في الأداء التشغيلي بعد تطبيق الأتمتة.', icon: 'trending_up' }
                ]
            },
            infra: {
                title: 'بنية مدنية',
                badge: 'جاهزة للتوسع',
                description: 'حلول هندسية تأسيسية وإنشائية للمشاريع المعقدة، من الأعمال تحت الأرض حتى الهياكل المرتفعة.',
                features: [
                    { title: 'تهيئة المواقع', desc: 'أعمال تسوية وتجهيز وأساسات متكاملة.', icon: 'agriculture' },
                    { title: 'سلامة إنشائية', desc: 'اختبارات مواد متقدمة وتصميم إنشائي مقاوم للزلازل.', icon: 'architecture' }
                ],
                metrics: [
                    { value: '2M+', label: 'قدم مربع منفذ', desc: 'إجمالي البصمة الإنشائية والتأسيسية المنجزة.', icon: 'square_foot' }
                ]
            }
        }
    },
    section3: {
        sectionLabel: 'القسم 04',
        titleStart: 'قيمنا ',
        titleHighlight: 'الأساسية',
        navLabel: 'التنقل',
        slideLabel: 'الشريحة',
        progressStart: 'البداية',
        progressEnd: 'الاكتمال',
        values: [
            {
                id: '01',
                title: 'دقة هندسية',
                desc: 'نتعامل مع كل تفصيلة بجدية عالية لأن الفروقات الصغيرة تصنع أداءً أكبر على أرض الواقع.',
                icon: 'precision_manufacturing',
                tag: 'استكشف العمق',
                class: 'precision-slide'
            },
            {
                id: '02',
                title: 'ابتكار صناعي',
                desc: 'نوظف أدوات حديثة مثل BIM وأنظمة التخطيط الذكي لرفع كفاءة التنفيذ.',
                icon: 'memory',
                tag: 'اعرض التقنيات',
                class: 'innovation-slide'
            },
            {
                id: '03',
                title: 'نزاهة ثابتة',
                desc: 'الثقة والسلامة أساس تعاملنا في كل مشروع، من أول اجتماع حتى التسليم النهائي.',
                icon: 'verified_user',
                tag: 'حالة موثقة',
                class: 'integrity-slide'
            },
            {
                id: '04',
                title: 'بنية مستدامة',
                desc: 'نراعي الأثر البيئي على المدى الطويل ونطبق ممارسات الاستدامة حيث تضيف قيمة حقيقية.',
                icon: 'eco',
                tag: 'الاستدامة',
                class: 'sustainable-slide'
            },
            {
                id: '05',
                title: 'تميّز تعاوني',
                desc: 'نعمل مع العميل والاستشاري وفرق الموقع كفريق واحد للحفاظ على اتساق التنفيذ.',
                icon: 'groups',
                tag: 'نجاح الفريق',
                class: 'excellence-slide'
            }
        ]
    },
    section4: {
        sectionLabel: 'القسم 05',
        titleStart: 'مكاتبنا',
        titleHighlight: '',
        subtitle: 'حضورنا في منطقتين يجمع بين سرعة الاستجابة المحلية والتغطية الإقليمية الأوسع.',
        coordLabel: 'الإحداثيات',
        directions: 'الاتجاهات',
        offices: [
            {
                id: 'ksa',
                country: 'المملكة العربية السعودية',
                flag: '🇸🇦',
                tag: 'المقر السعودي',
                name: 'مركز راية للأعمال',
                address: '6177 شارع 67، الدمام 34327',
                region: 'المنطقة الشرقية',
                coordinates: '26.4207° شمالاً، 50.0888° شرقاً',
                status: 'نشط',
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.7!2d50.0888!3d26.4207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5b7!2sRaya+Business+Center%2C+Dammam!5e0!3m2!1sen!2ssa!4v1'
            },
            {
                id: 'eg',
                country: 'مصر',
                flag: '🇪🇬',
                tag: 'المقر المصري',
                name: 'أبراج سيتي ستارز',
                address: 'برج رقم 7، الحي الأول، 6 أكتوبر\nمدينة 6 أكتوبر، الجيزة 3225014',
                region: 'محافظة الجيزة',
                coordinates: '29.9697° شمالاً، 30.9247° شرقاً',
                status: 'نشط',
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d30.9247!3d29.9697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585!2sCity+Stars+Towers%2C+6th+October!5e0!3m2!1sen!2seg!4v1'
            }
        ]
    },
    section5: {
        badge: 'عن Focus',
        headlineStart: 'هوية هندسية',
        headlineAccent: 'قائمة على الدقة',
        body: 'نبني حلولاً هندسية عملية بمعايير واضحة وتنفيذ منضبط، مع تركيز دائم على الأداء طويل المدى.',
        analytics: 'تحليلات النظام',
        features: [
            { label: 'المنهجية', value: 'تصميم استراتيجي' },
            { label: 'التنفيذ', value: 'تميز تقني' },
            { label: 'البنية التحتية', value: 'أنظمة موجهة للمستقبل' },
            { label: 'الأساس', value: 'ابتكار منظم' }
        ],
        stats: [
            { end: 24, suffix: 'k+', label: 'تنفيذات' },
            { end: 99.9, suffix: '%', label: 'دقة', decimals: 1 },
            { end: 12, suffix: '+', label: 'مراكز عالمية' },
            { end: null, suffix: '∞', label: 'ابتكار' }
        ]
    },
    partners: {
        titleStart: 'شراكات ',
        titleHighlight: 'استراتيجية',
        subtitle: 'نحقق نتائج أقوى عبر شراكات موثوقة وخبرة ميدانية متوافقة مع احتياجات المنطقة.',
        regions: {
            ksa: 'المملكة العربية السعودية',
            egypt: 'مصر'
        },
        tabs: {
            partners: 'الشركاء',
            customers: 'كبار العملاء'
        },
        features: [
            {
                icon: 'hub',
                title: 'مراكز إقليمية',
                description: 'مكاتب في القاهرة والدمام لدعم العمليات الصناعية التي تتطلب جاهزية عالية.'
            },
            {
                icon: 'verified',
                title: 'خبراء معتمدون',
                description: 'نختار شركاءنا وفق إجراءات تدقيق جودة صارمة ومعايير هندسية واضحة.'
            },
            {
                icon: 'rocket_launch',
                title: 'أثر النمو',
                description: 'ندعم أكثر من 50 مشروع بنية تحتية كبير سنوياً في شمال أفريقيا ودول الخليج.'
            }
        ],
        footer: 'مدعوم بشراكات موثوقة عبر المنطقة'
    },
    section_iso: {
        title: 'شهادات الأيزو',
        subtitle: 'نحن معتمدون بشهادات الأيزو',
        description: 'التزامنا بالجودة والمسؤولية البيئية والصحة والسلامة المهنية مدعوم بشهادات معترف بها دولياً.',
        certificates: [
            {
                id: 'iso9001',
                title: 'ISO 9001',
                standard: 'نظام إدارة الجودة',
                description: 'متطلبات نظام إدارة الجودة.'
            },
            {
                id: 'iso14001',
                title: 'ISO 14001',
                standard: 'نظام الإدارة البيئية',
                description: 'معايير الإدارة البيئية لمساعدة المنظمات على تقليل تأثيرها.'
            },
            {
                id: 'iso45001',
                title: 'ISO 45001',
                standard: 'نظام إدارة الصحة والسلامة المهنية',
                description: 'إرشادات لتحسين سلامة الموظفين وتقليل مخاطر مكان العمل.'
            }
        ]
    }
};

export default about;

