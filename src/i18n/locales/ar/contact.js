const contact = {
    offices: [
        {
            id: 'eg',
            position: [ 29.9697, 30.9247 ],
            flag: '🇪🇬',
            name: 'أبراج سيتي ستارز',
            city: 'مدينة 6 أكتوبر، الجيزة · مصر',
            address: 'برج رقم 7، الحي الأول، 6 أكتوبر، الجيزة 3225014',
            mapsUrl: 'https://maps.google.com/?q=City+Stars+Towers,+6th+October+City,+Giza,+Egypt'
        },
        {
            id: 'ksa',
            position: [ 26.4207, 50.0888 ],
            flag: '🇸🇦',
            name: 'مركز راية للأعمال',
            city: 'الدمام 34327 · السعودية',
            address: '6177 شارع 67، الدمام 34327، المملكة العربية السعودية',
            mapsUrl: 'https://maps.google.com/?q=Raya+Business+Center,+Dammam+34327,+Saudi+Arabia'
        }
    ],
    hero: {
        badge: 'Focus Trading & Contracting',
        titleLine: 'تواصل مع',
        titleHighlight: 'FOCUS T&C',
        subtitle: 'شاركونا تفاصيل مشروعكم، وفريقنا الهندسي سيتواصل معكم بالدعم المناسب.'
    },
    channelsSection: {
        title: 'قنوات<br /><span>التواصل المباشر</span>',
        subtitle: 'يمكنكم التواصل مع فريقنا عبر القنوات التالية.',
        channels: [
            {
                icon: '🇸🇦',
                label: 'مكتب السعودية',
                value: '+966 53 818 6792',
                note: 'خط مباشر - السعودية'
            },
            {
                icon: '🇪🇬',
                label: 'مكتب مصر',
                value: '+20 109 088 0401',
                note: 'خط مباشر - مصر'
            },
            {
                icon: '✉️',
                label: 'البريد الإلكتروني',
                value: 'info@focus-tc.com',
                note: 'الرد المعتاد: أقل من 24 ساعة'
            },
            {
                icon: '🕐',
                label: 'ساعات التشغيل',
                value: 'الاحد - الخميس / 08:00-16:00',
                note: 'دعم نهاية الأسبوع: عند الطلب'
            }
        ]
    },
    form: {
        title: 'إرسال استفسار',
        subtitle: 'أرسل تفاصيل مشروعك وسنتواصل معك في أقرب وقت.',
        successTitle: 'تم استلام الرسالة',
        successText: 'تم إرسال رسالتك بنجاح، وسيقوم فريقنا بالرد خلال 24 ساعة.',
        sendAnother: 'إرسال رسالة أخرى',
        labels: {
            fullName: 'الاسم الكامل',
            company: 'الشركة',
            email: 'البريد الإلكتروني',
            service: 'الخدمة المطلوبة',
            message: 'ملخص المشروع'
        },
        placeholders: {
            fullName: 'مثال: أحمد محمد',
            company: 'مثال: اسم شركتك',
            email: 'name@company.com',
            message: 'اكتب متطلبات مشروعك...'
        },
        serviceOptions: [
            'حلول توليد الطاقة',
            'الأتمتة الصناعية (PLC / SCADA)',
            'المقاولات الكهروميكانيكية',
            'تكامل أنظمة MEP',
            'أخرى'
        ],
        submit: 'إرسال',
        sending: 'جارٍ الإرسال...',
        errors: {
            required: 'يرجى تعبئة جميع الحقول المطلوبة.',
            invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
            generic: 'حدث خطأ. يرجى المحاولة لاحقاً.',
            connection: 'فشل إرسال الرسالة. يرجى التحقق من الاتصال.'
        }
    },
    map: {
        directions: 'الحصول على الاتجاهات ←'
    },
    cta: {
        titleLine: 'جاهز لبدء',
        titleHighlight: 'مشروعك؟',
        description: 'خبراؤنا جاهزون لدعم مشروعك القادم في الطاقة أو الهندسة الصناعية.',
        primaryButton: 'حجز استشارة',
        secondaryButton: 'عرض خدماتنا'
    }
};

export default contact;

