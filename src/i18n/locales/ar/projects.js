const projects = {
    hero: {
        badge: 'تنفيذ صناعي',
        title: 'مشاريعنا',
        subtitle: 'نماذج من مشاريع الطاقة والأتمتة والمقاولات الكهروميكانيكية التي نفذناها في مصر والمملكة العربية السعودية.',
        primaryButton: 'عرض الأعمال',
        secondaryButton: 'تواصل مع الفريق'
    },
    intro: {
        title: 'أداء هندسي على نطاق واسع',
        description: 'تقدم Focus TC حلولاً هندسية عالية الأداء للقطاعات الصناعية والتجارية والخدمية مع تركيز ثابت على الجودة والسلامة.',
        readMethodology: 'اقرأ عن منهجيتنا',
        stats: [
            { icon: 'bolt', value: '1.2 GW', label: 'إجمالي القدرة المسلّمة' },
            { icon: 'check_circle', value: '50+', label: 'مشروع عالمي' },
            { icon: 'factory', value: '6+', label: 'سنوات خبرة' },
            { icon: 'public', value: '2', label: 'نطاق التشغيل' }
        ]
    },
    grid: {
        categories: {
            all: 'الكل',
            industrial: 'صناعي',
            commercial: 'تجاري',
            utilities: 'مرافق'
        },
        viewDetails: 'عرض تفاصيل المشروع',
        modal: {
            client: 'العميل',
            duration: 'المدة',
            value: 'قيمة المشروع',
            year: 'السنة',
            servicesProvided: 'الخدمات المقدمة',
            requestSimilar: 'طلب مشروع مشابه'
        },
        loadMore: 'تحميل المزيد من المشاريع',
        // TODO: DATA NOT FOUND IN MASTER FILE
        projects: [
            {
                id: 1,
                title: 'محطة كهرباء القاهرة غرب',
                location: 'مدينة 6 أكتوبر، مصر',
                category: 'industrial',
                description: 'تنفيذ متكامل للأعمال الكهربائية ودمج الأتمتة في توسعة التوربينات، مع استهداف جاهزية تشغيلية بنسبة 99.9%.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPHmW6_t-Pisd0P3paSmPqru50aIXTYzgrXXaADZewE34mhBDiwpwNAadwcJcldz9Jt2R1hf_dCKHHUi32PxFp6fLHUiU3qzJJI7DqQ9xvjIDShB6eBR7t-6z9AKFDwhgtCAQ_KRUZAyrYQ40n4xxmN61Kw1ZBJOuhbNEstjxlnTpoD8PgkatWyyVC2l6EQ1nb1DBFHQrXfYX1IXd4VnuQZP8yUABfQeP2ZDgai_K_v5fHcZBX_ld9_zo49K8y3XN5K4LyCypWVlY',
                client: 'محطة كهرباء القاهرة غرب',
                duration: '18 شهراً',
                value: '$12.5M',
                services: [ 'تركيبات كهربائية', 'أنظمة أتمتة', 'لوحات جهد عالٍ', 'توزيع طاقة' ],
                year: '2023'
            },
            {
                id: 2,
                title: 'مجمع فندق الماسة',
                location: 'العاصمة الجديدة، مصر',
                category: 'commercial',
                description: 'تصميم وتنفيذ أنظمة إدارة مبانٍ ذكية وحلول طاقة احتياطية لفندق فاخر يضم 500 غرفة.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9ErI9voqAxE7bPxbO0qPmnAqc7e-ih4a3xmlF70nADlxjTC2eDJrEVT0vGD3HTceMG-WSbaeymQNewax5ri2aeYi_cgnAZaXsREQjuIcA_ax9su5I7ObeNh61142rJTEBXUTlrumROWSVto7mABGgO22OMazT4KDKmgySKSHeC_W3RqMCEjrfxnhVjI9WBdlGEq40UnEojyVzJNIoo-kbdYkNjcsNBGsveQFmVir1bO9alnAgAQU7sTE-tjY-pX3HC5j-ZcwaNk',
                client: 'مجموعة الماسة للضيافة',
                duration: '14 شهراً',
                value: '$8.2M',
                services: [ 'تكامل BMS', 'طاقة احتياطية', 'تحكم HVAC', 'أنظمة تيار خفيف' ],
                year: '2024'
            },
            {
                id: 3,
                title: 'ربط شبكة مجمع بنبان الشمسي',
                location: 'أسوان، مصر',
                category: 'utilities',
                description: 'تنفيذ ربط محطات الجهد العالي وشبكات التوزيع لأحد أكبر المجمعات الشمسية في العالم.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzov0Br4DwyUHbAuZYDUwGDLqL-KjVPH5BJN8JaRXdcACHI9e9kjUQtQFXP81MkWwnLz8tiYIVm5N3xnZEdM1rlJXtin9_Yz2xjJUbc40G_j8Eft83oWp9Az51rl5Fj46UcNwaK4DfSGlmyQF6VNTyTEZbQLDXpOR_WokIyWAgAK65UBt-hhWzKOpw2JocNUWMOeu0mkZ8mj7127bCP-Fxvp7qgn5L8xshZgAyAu0_HJUVjLOlUpfElidwRyybDT0FrvtocoOqnqI',
                client: 'Infinity Power / Masdar',
                duration: '24 شهراً',
                value: '$22M',
                services: [ 'محطات جهد عالٍ', 'ربط شبكي', 'توزيع طاقة', 'أنظمة سكادا' ],
                year: '2022'
            },
            {
                id: 4,
                title: 'تحديث مصنع ذكي',
                location: 'الإسكندرية، مصر',
                category: 'industrial',
                description: 'تحديث خطوط تصنيع تقليدية بحساسات إنترنت الأشياء ولوحات متابعة لحظية لدعم الصيانة التنبؤية.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwYINHQ3hHGA66zIFZH8tX5YlK1bTXU350pCuFSUX4TceKCHWuM8gNUvrV38-Wo8jLtDLzjw4VqVvQhiaWQplXC4CvmLfxMzpmhtcp1j77Ye69qz8Ey_CdJbQldlxUGQk8VgsZyeyFGu1yfPXXGHUNYAigTzer_Ho_t7PvyjNKTtEXvdCXmBhtoHFSsScXxY9-iOSHYMGXG7m2n6kEjKefXntmURAWEuZ7I0xw8n0YJoJpfnXt2ifigw7bN9kZ5-rcN5vgZHAeUCw',
                client: 'شركة الإسكندرية للتصنيع',
                duration: '8 أشهر',
                value: '$3.8M',
                services: [ 'تكامل IoT', 'أتمتة', 'صيانة تنبؤية', 'أنظمة لوحات متابعة' ],
                year: '2024'
            },
            {
                id: 5,
                title: 'برج بزنس باي',
                location: 'دبي، الإمارات',
                category: 'commercial',
                description: 'تنفيذ كهروميكانيكي متكامل لبرج تجاري من 45 طابقاً يشمل HVAC وأنظمة مكافحة الحريق والتيار الخفيف.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVWniBaFY6YQpiU_RRo82EwkC0WKixKASbRlFT-e8RBHtNV_qAkrUOxV9Ekr4xPEQuJFTrvY4ZKqDOYmrHz6ZUAtOmQsZjUr4tQWzX1QCgL42-XtIjZOj_-SPB0y0NAIVpEBIHA2iMME0LqWbVXxhCoDusrURZ3MgyjpMfLYvdlBzKIZ69MJRKiirsvkDfTrxYo2gidw_FfUZ6lCR61qsruAEOPOkdYh_OaohC-eWmLCkz5pol0EQAk33YSKwcHMjrwA8Sz0l3KjI',
                client: 'Dubai Holdings',
                duration: '32 شهراً',
                value: '$45M',
                services: [ 'تصميم MEP', 'أنظمة HVAC', 'مكافحة حريق', 'تيار خفيف', 'مصاعد' ],
                year: '2021'
            },
            {
                id: 6,
                title: 'سكادا محطة معالجة مياه',
                location: 'القاهرة، مصر',
                category: 'utilities',
                description: 'تنفيذ نظام سكادا مركزي لمحطة معالجة مياه بلدية لتحسين جرعات المعالجة وتشغيل المضخات.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5OaFaSMp9NmrcovZJOe6YGUveIPf8BoCCFfFEWyG9V1KP-OwWVsjkDML-sLi96SPxEWmo1ea01Lh7Kmp9rfx2Tzq9GVb-WNDzVDxwHlcVlEAHlmsukXyMDjZmM6Vxj8UMczS2pV1p6FxVYsFoF5CpEqbUN15cS4quLs47XJwCLxfYe0PGKnydxqAG2E2WC2m9t7eORu_5oC6m4MhDu4I8fAKSMI03NiB8oabWdFhtVtC4wXVaO9IDTghuvoyvD-jhfDJQPhMjoHE',
                client: 'هيئة مياه القاهرة',
                duration: '12 شهراً',
                value: '$5.5M',
                services: [ 'تصميم سكادا', 'برمجة PLC', 'تحكم عمليات', 'مراقبة عن بعد' ],
                year: '2023'
            }
        ]
    },
    cta: {
        badge: 'كن شريكاً معنا',
        titleLine: 'جاهزون لدعم',
        titleHighlight: ' مشروعك القادم؟',
        description: 'من أول استشارة وحتى التشغيل النهائي، تقدم Focus حلولاً كهروميكانيكية متكاملة مصممة حسب احتياج مشروعك.',
        features: [ '6+ سنوات خبرة', 'ضمان جاهزية 99.99%', 'ISO 9001 / ISO 45001' ],
        primaryButton: 'حجز استشارة',
        secondaryButton: 'ملف الشركة'
    }
};

export default projects;

