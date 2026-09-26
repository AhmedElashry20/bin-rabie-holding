// ===== Modal Data =====
const modalData = {
    // === Board & Leadership ===
    chairman: {
        titleAr: 'رئيس مجلس الإدارة',
        titleEn: 'Chairman of the Board',
        nameAr: 'سامي ربعي العتيبي',
        nameEn: 'Sami Rabie Al-Otaibi',
        img: 'images/sami.jpg',
        bg: 'images/chairman-modal-bg.jpg',
        textAr: 'بسم الله الرحمن الرحيم، يسرني ويشرفني أن أرحب بكم في مجموعة بن ربعي القابضة. منذ تأسيس المجموعة ونحن نسعى لتحقيق رؤيتنا في أن نكون من الشركات الرائدة في المملكة العربية السعودية. لقد بنينا مجموعتنا على أسس راسخة من القيم والمبادئ، ونعمل بجد واجتهاد لتقديم أفضل الخدمات لعملائنا وشركائنا. نطمح لأن نكون شركاء في بناء مستقبل أفضل للمملكة تماشياً مع رؤية 2030.',
        textEn: 'In the name of God, the Most Gracious, the Most Merciful. It is my pleasure and honor to welcome you to Bin Rabie Holding Group. Since the establishment of the group, we have been striving to achieve our vision of being among the leading companies in the Kingdom of Saudi Arabia. We have built our group on solid foundations of values and principles, working diligently to provide the best services to our clients and partners. We aspire to be partners in building a better future for the Kingdom in line with Vision 2030.',
        servicesAr: ['القيادة الاستراتيجية', 'رؤية المجموعة', 'تطوير الأعمال'],
        servicesEn: ['Strategic Leadership', 'Group Vision', 'Business Development']
    },
    member1: {
        titleAr: 'نائب رئيس مجلس الإدارة',
        titleEn: 'Vice Chairman',
        nameAr: 'عبدالله بن حمد العصيمي',
        nameEn: 'Abdullah bin Hamad Al-Asimi',
        img: 'images/abdullah.jpg',
        bg: 'images/member-modal-bg.jpg',
        textAr: 'نؤمن بأن النجاح الحقيقي يأتي من العمل الجماعي والرؤية الواضحة. مجموعة بن ربعي القابضة تمثل نموذجاً للتطور والنمو المستدام في المملكة العربية السعودية. نعمل معاً لتحقيق أعلى معايير الجودة والتميز في جميع قطاعاتنا، ونسعى لتقديم قيمة حقيقية لمساهمينا وعملائنا والمجتمع.',
        textEn: 'We believe that true success comes from teamwork and clear vision. Bin Rabie Holding Group represents a model for sustainable development and growth in Saudi Arabia. We work together to achieve the highest standards of quality and excellence across all our sectors, striving to deliver real value to our shareholders, clients, and the community.',
        servicesAr: ['الحوكمة المؤسسية', 'تطوير القطاعات', 'الشراكات الاستراتيجية'],
        servicesEn: ['Corporate Governance', 'Sector Development', 'Strategic Partnerships']
    },
    member2: {
        titleAr: 'عضو مجلس الإدارة',
        titleEn: 'Board Member',
        nameAr: 'بدر بن حمد العصيمي',
        nameEn: 'Badr bin Hamad Al-Asimi',
        img: 'images/badr.jpg',
        bg: 'images/member-modal-bg.jpg',
        textAr: 'في ظل التحولات الكبرى التي تشهدها المملكة العربية السعودية، نفخر بأن مجموعة بن ربعي القابضة تسير بخطى ثابتة نحو تحقيق أهدافها الطموحة. نستثمر في الكوادر البشرية والتقنيات الحديثة لنكون في طليعة الشركات المساهمة في التنمية الوطنية.',
        textEn: 'Amid the major transformations in Saudi Arabia, we are proud that Bin Rabie Holding Group is steadily moving towards achieving its ambitious goals. We invest in human capital and modern technologies to be at the forefront of companies contributing to national development.',
        servicesAr: ['الاستثمار والتنمية', 'الابتكار المؤسسي', 'المسؤولية المجتمعية'],
        servicesEn: ['Investment & Development', 'Corporate Innovation', 'Social Responsibility']
    },
    member3: {
        titleAr: 'عضو مجلس الإدارة',
        titleEn: 'Board Member',
        nameAr: 'عبدالرحمن شباب العتيبي',
        nameEn: 'Abdulrahman Shabab Al-Otaibi',
        img: 'images/abdulrahman.jpg',
        bg: 'images/member-modal-bg.jpg',
        textAr: 'نسعى في مجموعة بن ربعي القابضة إلى تحقيق التميز والريادة في جميع المجالات التي نعمل بها. نؤمن بأن العمل المؤسسي المبني على أسس صحيحة هو الطريق الأمثل لتحقيق النمو المستدام وخدمة المجتمع.',
        textEn: 'At Bin Rabie Holding Group, we strive for excellence and leadership in all our fields. We believe that institutional work built on solid foundations is the best path to sustainable growth and community service.',
        servicesAr: ['التطوير المؤسسي', 'الاستثمار الاستراتيجي', 'دعم رؤية المجموعة'],
        servicesEn: ['Institutional Development', 'Strategic Investment', 'Group Vision Support']
    },
    ceo: {
        titleAr: 'المدير التنفيذي',
        titleEn: 'CEO',
        nameAr: 'ياسر جمال',
        nameEn: 'Yasser Jamal',
        img: 'images/ceo.jpg',
        bg: 'images/ceo-modal-bg.jpg',
        textAr: 'أتشرف بقيادة فريق عمل متميز في مجموعة بن ربعي القابضة. نعمل بكل طاقتنا لتحقيق التميز التشغيلي والنمو المستدام عبر جميع قطاعات المجموعة. هدفنا هو تقديم حلول متكاملة وخدمات استثنائية تلبي تطلعات عملائنا وتساهم في تحقيق رؤية المملكة 2030. نلتزم بأعلى معايير الجودة والابتكار في كل ما نقدمه.',
        textEn: 'I am honored to lead a distinguished team at Bin Rabie Holding Group. We work with all our energy to achieve operational excellence and sustainable growth across all sectors of the group. Our goal is to provide integrated solutions and exceptional services that meet our clients\' aspirations and contribute to achieving the Kingdom\'s Vision 2030. We are committed to the highest standards of quality and innovation in everything we offer.',
        servicesAr: ['الإدارة التنفيذية', 'التخطيط الاستراتيجي', 'تطوير الأداء'],
        servicesEn: ['Executive Management', 'Strategic Planning', 'Performance Development']
    },
    operations: {
        titleAr: 'مدير إدارة التشغيل',
        titleEn: 'Operations Manager',
        nameAr: 'إياس أنور',
        nameEn: 'Eyas Anwar',
        img: "images/eyas.jpg",
        bg: '',
        textAr: 'إدارة التشغيل هي المحرك الأساسي لأعمال مجموعة بن ربعي القابضة. نعمل على ضمان سير العمليات اليومية بكفاءة عالية وجودة متميزة عبر جميع قطاعات المجموعة. نسعى لتحسين العمليات التشغيلية باستمرار وتطبيق أفضل الممارسات لتحقيق أعلى مستويات الإنتاجية والأداء.',
        textEn: 'The Operations Department is the core engine of Bin Rabie Holding Group. We ensure daily operations run with high efficiency and quality across all group sectors. We continuously improve operational processes and apply best practices to achieve the highest levels of productivity and performance.',
        servicesAr: ['إدارة العمليات اليومية', 'تحسين الأداء التشغيلي', 'ضمان الجودة', 'إدارة الموارد', 'تطوير إجراءات العمل', 'متابعة الأداء'],
        servicesEn: ['Daily Operations Management', 'Operational Performance', 'Quality Assurance', 'Resource Management', 'Process Development', 'Performance Monitoring']
    },
    accounts: {
        titleAr: 'مدير إدارة الحسابات',
        titleEn: 'Accounts Manager',
        nameAr: 'المنتصر',
        nameEn: 'Almontsr',
        img: 'images/montaser.jpg',
        bg: '',
        textAr: 'إدارة الحسابات تتولى مسؤولية الإشراف على جميع الشؤون المالية والمحاسبية لمجموعة بن ربعي القابضة. نعمل على تقديم تقارير مالية دقيقة وشفافة، وإدارة الميزانيات والتدفقات النقدية، وضمان الامتثال للمعايير المحاسبية المعتمدة.',
        textEn: 'The Accounts Department oversees all financial and accounting affairs of Bin Rabie Holding Group. We deliver accurate and transparent financial reports, manage budgets and cash flows, and ensure compliance with approved accounting standards.',
        servicesAr: ['المحاسبة المالية', 'إعداد التقارير المالية', 'إدارة الميزانيات', 'التدقيق الداخلي', 'إدارة التدفقات النقدية', 'الامتثال المالي'],
        servicesEn: ['Financial Accounting', 'Financial Reporting', 'Budget Management', 'Internal Auditing', 'Cash Flow Management', 'Financial Compliance']
    },
    itm: {
        titleAr: 'مدير قسم تقنية المعلومات',
        titleEn: 'CIO Manager',
        nameAr: 'أحمد العشري',
        nameEn: 'Ahmed El-Ashry',
        img: 'images/ahmed.jpg',
        bg: '',
        textAr: 'إدارة تكنولوجيا المعلومات هي الذراع التقني لمجموعة بن ربعي القابضة. نعمل على تطوير الحلول البرمجية المتكاملة، إدارة البنية التحتية التقنية، وقيادة مشاريع التحول الرقمي للمجموعة. نقدم حلولاً مبتكرة في مجال تطوير المواقع والتطبيقات، الأمن السيبراني، والحوسبة السحابية.',
        textEn: 'The CIO Department is the technological arm of Bin Rabie Holding Group. We develop integrated software solutions, manage technical infrastructure, and lead the group\'s digital transformation projects. We provide innovative solutions in web and app development, cybersecurity, and cloud computing.',
        servicesAr: ['تطوير مواقع وتطبيقات', 'الأمن السيبراني', 'الحوسبة السحابية', 'تحليل البيانات', 'التحول الرقمي', 'دعم تقني متكامل'],
        servicesEn: ['Web & App Development', 'Cybersecurity', 'Cloud Computing', 'Data Analytics', 'Digital Transformation', 'Full IT Support']
    },

    hr: {
        titleAr: 'مدير إدارة الموارد البشرية',
        titleEn: 'HR Manager',
        nameAr: 'أحمد الطوري',
        nameEn: 'Ahmed Eltory',
        img: 'images/eltory.jpg',
        bg: '',
        textAr: 'إدارة الموارد البشرية تعد الركيزة الأساسية في بناء وتطوير الكوادر البشرية لمجموعة بن ربعي القابضة. نعمل على استقطاب أفضل الكفاءات وتطويرها، وبناء بيئة عمل محفزة ومنتجة. نحرص على تطبيق أفضل الممارسات في إدارة الموارد البشرية لضمان رضا الموظفين وتحقيق أهداف المجموعة.',
        textEn: 'The HR Department is the cornerstone of building and developing human capital at Bin Rabie Holding Group. We recruit and develop top talent, building a motivating and productive work environment. We apply best HR practices to ensure employee satisfaction and achieve the group\'s objectives.',
        servicesAr: ['التوظيف والاستقطاب', 'التدريب والتطوير', 'شؤون الموظفين', 'تقييم الأداء', 'الرواتب والمزايا', 'بيئة العمل'],
        servicesEn: ['Recruitment', 'Training & Development', 'Employee Affairs', 'Performance Evaluation', 'Payroll & Benefits', 'Work Environment']
    },
    parcels: {
        titleAr: 'مدير قسم الطرود',
        titleEn: 'Parcels Manager',
        nameAr: 'طارق محمد أحمد',
        nameEn: 'Tarek Mohamed Ahmed',
        img: 'images/tark.jpg',
        bg: '',
        textAr: 'قسم الطرود يتولى إدارة وتشغيل خدمات الطرود والتوصيل في مجموعة بن ربعي القابضة. نعمل على تقديم خدمات توصيل سريعة وموثوقة تغطي جميع مناطق المملكة مع الحرص على جودة الخدمة ورضا العملاء.',
        textEn: 'The Parcels Department manages and operates parcel and delivery services at Bin Rabie Holding Group. We provide fast and reliable delivery services covering all regions of the Kingdom with focus on service quality and customer satisfaction.',
        servicesAr: ['إدارة الطرود', 'التوصيل السريع', 'تتبع الشحنات', 'خدمة العملاء', 'التغطية الشاملة', 'ضمان الجودة'],
        servicesEn: ['Parcel Management', 'Express Delivery', 'Shipment Tracking', 'Customer Service', 'Full Coverage', 'Quality Assurance']
    },
    qader: {
        titleAr: 'مدير إدارة قادر',
        titleEn: 'Qader Manager',
        nameAr: 'محمد بن سعيد',
        nameEn: 'Mohammed bin Saeed',
        img: "images/MohamedBinSayed.jpeg",
        bg: '',
        textAr: 'إدارة قادر هي إحدى الإدارات المتخصصة في مجموعة بن ربعي القابضة. نسعى لتقديم خدمات متميزة وحلول مبتكرة تلبي احتياجات العملاء وتساهم في تحقيق أهداف المجموعة الاستراتيجية.',
        textEn: 'Qader Department is one of the specialized departments at Bin Rabie Holding Group. We strive to provide outstanding services and innovative solutions that meet customer needs and contribute to achieving the group\'s strategic goals.',
        servicesAr: ['الإدارة والتشغيل', 'تطوير الخدمات', 'ضمان الجودة', 'خدمة العملاء', 'التخطيط الاستراتيجي', 'تحسين الأداء'],
        servicesEn: ['Management & Operations', 'Service Development', 'Quality Assurance', 'Customer Service', 'Strategic Planning', 'Performance Improvement']
    },
    apps: {
        titleAr: 'مدير تشغيل التطبيقات',
        titleEn: 'Applications Operations Manager',
        nameAr: 'أيسن علي أحمد الدغيل',
        nameEn: 'Asen Ali Ahmad Al-Dughail',
        bg: '',
        textAr: 'قسم تشغيل التطبيقات يتولى إدارة وتشغيل التطبيقات الرقمية لمجموعة بن ربعي القابضة. نعمل على ضمان استمرارية وكفاءة عمل جميع التطبيقات والمنصات الرقمية، مع التركيز على تحسين تجربة المستخدم وضمان أعلى مستويات الأداء والموثوقية.',
        textEn: 'The Applications Operations Department manages and operates digital applications for Bin Rabie Holding Group. We ensure continuity and efficiency of all applications and digital platforms, focusing on improving user experience and ensuring the highest levels of performance and reliability.',
        servicesAr: ['تشغيل التطبيقات', 'إدارة المنصات الرقمية', 'تحسين تجربة المستخدم', 'الدعم التقني', 'مراقبة الأداء', 'تحديث الأنظمة'],
        servicesEn: ['Application Operations', 'Digital Platform Management', 'User Experience', 'Technical Support', 'Performance Monitoring', 'System Updates']
    },




  
    // === Companies ===
    tco: {
        titleAr: 'TCO للخدمات اللوجستية',
        titleEn: 'TCO Logistics Services',
        nameAr: 'إياس أنور',
        nameEn: 'Eyas Anwar',
        img: 'images/eyas.jpg',
        roleTitleAr: 'المدير التنفيذي',
        roleTitleEn: 'Executive Director',
        bg: 'images/allpages/p15.png',
        textAr: 'شركة TCO للخدمات اللوجستية هي إحدى الشركات الرائدة في مجال الشحن الدولي والتخليص الجمركي. تقدم الشركة خدمات شحن بحري وجوي وبري شامل من وإلى جميع أنحاء العالم، مع توفير حلول لوجستية متكاملة تشمل التخزين والتوزيع وإدارة سلسلة الإمداد. تعمل الشركة وفق أعلى المعايير الدولية لضمان سلامة وسرعة وصول البضائع.',
        textEn: 'TCO Logistics Services is a leading company in international shipping and customs clearance. The company provides comprehensive sea, air, and land freight services to and from all parts of the world, with integrated logistics solutions including warehousing, distribution, and supply chain management. The company operates according to the highest international standards to ensure the safety and speed of goods delivery.',
        servicesAr: ['شحن بحري دولي', 'شحن جوي', 'تخليص جمركي', 'نقل بري', 'إدارة سلسلة الإمداد', 'تخزين وتوزيع'],
        servicesEn: ['International Sea Freight', 'Air Freight', 'Customs Clearance', 'Land Transport', 'Supply Chain Management', 'Warehousing & Distribution']
    },
    transport: {
        titleAr: 'بن ربعي للنقليات',
        titleEn: 'Bin Rabie Transportation',
        nameAr: 'إدارة المجموعة',
        nameEn: 'Group Management',
        roleTitleAr: 'الإدارة العامة',
        roleTitleEn: 'General Management',
        bg: 'images/allpages/p20.png',
        textAr: 'شركة بن ربعي للنقليات تقدم خدمات نقل بري متكاملة وآمنة في جميع أنحاء المملكة العربية السعودية ودول الخليج. تمتلك الشركة أسطولاً حديثاً من الشاحنات والمقطورات المجهزة لنقل جميع أنواع البضائع بما فيها المواد الخطرة والبضائع ذات الحجم الكبير. نلتزم بأعلى معايير السلامة وسرعة التسليم.',
        textEn: 'Bin Rabie Transportation provides comprehensive and safe land transport services throughout Saudi Arabia and the Gulf states. The company owns a modern fleet of trucks and trailers equipped to transport all types of goods including hazardous materials and oversized cargo. We are committed to the highest safety standards and delivery speed.',
        servicesAr: ['نقل بضائع عام', 'نقل مواد خطرة', 'نقل معدات ثقيلة', 'نقل بين المدن', 'تتبع الشحنات', 'نقل مبرد'],
        servicesEn: ['General Cargo Transport', 'Hazardous Materials', 'Heavy Equipment Transport', 'Inter-city Transport', 'Shipment Tracking', 'Refrigerated Transport']
    },
    tard: {
        titleAr: 'شركة طرد للتخزين والطرود',
        titleEn: 'Tard Storage & Parcels',
        nameAr: 'طارق محمد أحمد',
        nameEn: 'Tarek Mohamed',
        img : src='images/tark.jpg',
        roleTitleAr: 'المدير التنفيذي',
        roleTitleEn: 'Executive Director',
        bg: 'images/allpages/p29.png',
        textAr: 'شركة طرد للتخزين والطرود تقدم حلول تخزين متطورة وخدمات طرود سريعة وموثوقة. تمتلك الشركة مستودعات حديثة ومجهزة بأنظمة إدارة متقدمة تضمن سلامة وأمان المخزون. كما توفر خدمات توصيل طرود سريعة تغطي جميع مناطق المملكة مع نظام تتبع متكامل يتيح للعملاء متابعة شحناتهم.',
        textEn: 'Tard Storage & Parcels provides advanced storage solutions and fast, reliable parcel services. The company owns modern warehouses equipped with advanced management systems ensuring inventory safety and security. It also provides fast parcel delivery services covering all regions of the Kingdom with an integrated tracking system.',
        servicesAr: ['تخزين عام ومتخصص', 'مستودعات مكيفة', 'خدمات الطرود السريعة', 'التوصيل للمنازل', 'إدارة المخزون', 'نظام تتبع متكامل'],
        servicesEn: ['General & Specialized Storage', 'Climate-controlled Warehouses', 'Express Parcel Services', 'Home Delivery', 'Inventory Management', 'Integrated Tracking System']
    },
    dom: {
        titleAr: 'شركة دوم لتأجير السيارات',
        titleEn: 'Dom Car Rental',
        nameAr: 'إدارة الشركة',
        nameEn: 'Company Management',
        roleTitleAr: 'الإدارة العامة',
        roleTitleEn: 'General Management',
        bg: 'images/allpages/p36.png',
        textAr: 'شركة دوم لتأجير السيارات توفر تجربة تأجير سيارات متميزة بأسعار تنافسية. تتوفر لدينا مجموعة واسعة من السيارات الفاخرة والاقتصادية لتناسب جميع الاحتياجات والميزانيات. نقدم خدمات تأجير يومية وأسبوعية وشهرية وسنوية مع صيانة دورية وتأمين شامل. فروعنا منتشرة في المدن الرئيسية بالمملكة.',
        textEn: 'Dom Car Rental provides a premium car rental experience at competitive prices. We offer a wide range of luxury and economy vehicles to suit all needs and budgets. We provide daily, weekly, monthly, and annual rental services with regular maintenance and comprehensive insurance. Our branches are spread across major cities in the Kingdom.',
        servicesAr: ['سيارات فاخرة', 'سيارات اقتصادية', 'تأجير يومي وشهري', 'تأجير سنوي', 'تأمين شامل', 'خدمة التوصيل'],
        servicesEn: ['Luxury Cars', 'Economy Cars', 'Daily & Monthly Rental', 'Annual Rental', 'Comprehensive Insurance', 'Delivery Service']
    },
    limo: {
        titleAr: 'مسار العرب للأجرة العامة',
        titleEn: 'Masar El-Arab Limousine',
        nameAr: 'إدارة الشركة',
        nameEn: 'Company Management',
        img: src='images/MohamedBinSayed.jpeg',
        roleTitleAr: 'الإدارة العامة',
        roleTitleEn: 'General Management',
        bg: 'images/allpages/p44.png',
        textAr: 'شركة مسار العرب للأجرة العامة تقدم خدمات ليموزين فاخرة وأجرة عامة احترافية في المملكة العربية السعودية. نوفر أسطولاً متنوعاً من السيارات الفاخرة مع سائقين محترفين لنقل الأفراد والمجموعات. خدماتنا تشمل التوصيل من وإلى المطارات، رحلات الأعمال، المناسبات الخاصة، والتنقل اليومي.',
        textEn: 'Masar El-Arab Limousine offers premium limousine and professional public fare services in Saudi Arabia. We provide a diverse fleet of luxury vehicles with professional drivers for individual and group transportation. Our services include airport transfers, business trips, special events, and daily commuting.',
        servicesAr: ['ليموزين فاخرة', 'نقل من وإلى المطار', 'رحلات أعمال', 'خدمة المناسبات', 'نقل يومي', 'سائقين محترفين'],
        servicesEn: ['Luxury Limousine', 'Airport Transfers', 'Business Trips', 'Event Service', 'Daily Commuting', 'Professional Drivers']
    },
    engineering: {
        titleAr: 'الربعي للاستشارات الهندسية',
        titleEn: 'Al-Rabie Engineering Consulting',
        nameAr: 'فريق هندسي متخصص',
        nameEn: 'Specialized Engineering Team',
        roleTitleAr: 'الإدارة الهندسية',
        roleTitleEn: 'Engineering Management',
        bg: 'images/allpages/p48.png',
        textAr: 'شركة الربعي للاستشارات الهندسية تقدم خدمات استشارية هندسية شاملة تشمل التصميم المعماري والإنشائي، الإشراف الهندسي على المشاريع، إدارة المشاريع، ودراسات الجدوى الهندسية. يضم فريقنا نخبة من المهندسين والمتخصصين ذوي الخبرة العالية في مختلف التخصصات الهندسية.',
        textEn: 'Al-Rabie Engineering Consulting provides comprehensive engineering consultancy services including architectural and structural design, engineering project supervision, project management, and engineering feasibility studies. Our team includes elite engineers and specialists with high expertise in various engineering disciplines.',
        servicesAr: ['تصميم معماري', 'تصميم إنشائي', 'إشراف هندسي', 'إدارة مشاريع', 'دراسات جدوى', 'تصميم داخلي'],
        servicesEn: ['Architectural Design', 'Structural Design', 'Engineering Supervision', 'Project Management', 'Feasibility Studies', 'Interior Design']
    },
    contractors: {
        titleAr: 'مقاولو الخليج للمقاولات',
        titleEn: 'Gulf Contractors',
        nameAr: 'نادر إبراهيم أحمد عطوة',
        nameEn: 'Nader Ibrahim Ahmad Atwa',
        roleTitleAr: 'المدير التنفيذي',
        roleTitleEn: 'Executive Director',
        bg: 'images/allpages/p52.png',
        textAr: 'شركة مقاولو الخليج للمقاولات العامة متخصصة في تنفيذ مشاريع البناء والتشييد والبنية التحتية. تمتلك الشركة خبرة واسعة في بناء المباني السكنية والتجارية والصناعية، وتنفيذ مشاريع الطرق والجسور وشبكات المياه والصرف الصحي. نعمل وفق أعلى معايير الجودة والسلامة المعتمدة.',
        textEn: 'Gulf Contractors specializes in executing construction and infrastructure projects. The company has extensive experience in building residential, commercial, and industrial structures, as well as executing road, bridge, water network, and sewage system projects. We operate according to the highest approved quality and safety standards.',
        servicesAr: ['مقاولات عامة', 'مباني سكنية وتجارية', 'بنية تحتية', 'طرق وجسور', 'شبكات مياه وصرف', 'ترميم وتجديد'],
        servicesEn: ['General Contracting', 'Residential & Commercial Buildings', 'Infrastructure', 'Roads & Bridges', 'Water & Sewage Networks', 'Restoration & Renovation']
    },
    hotel: {
        titleAr: 'الحمد لإدارة الفنادق والتطوير العقاري',
        titleEn: 'Al Hamad Hotels & Real Estate Development',
        nameAr: 'إدارة الشركة',
        nameEn: 'Company Management',
        roleTitleAr: 'الإدارة العامة',
        roleTitleEn: 'General Management',
        bg: 'images/allpages/p58.png',
        textAr: 'شركة الحمد لإدارة الفنادق والتطوير العقاري متخصصة في إدارة وتشغيل الفنادق والشقق الفندقية الفاخرة، بالإضافة إلى تطوير المشاريع العقارية المتميزة. نسعى لتقديم تجربة ضيافة استثنائية لضيوفنا من خلال خدمات راقية ومرافق عالمية المستوى.',
        textEn: 'Al Hamad Hotels & Real Estate Development specializes in managing and operating luxury hotels and serviced apartments, as well as developing premium real estate projects. We strive to provide an exceptional hospitality experience for our guests through premium services and world-class facilities.',
        servicesAr: ['إدارة فنادق', 'شقق فندقية', 'تطوير عقاري', 'خدمات ضيافة', 'إدارة منشآت', 'استشارات فندقية'],
        servicesEn: ['Hotel Management', 'Serviced Apartments', 'Real Estate Development', 'Hospitality Services', 'Facility Management', 'Hotel Consulting']
    },
    travel: {
        titleAr: 'بن ربعي للسفر والسياحة',
        titleEn: 'Bin Rabie Travel & Tourism',
        nameAr: 'إدارة الشركة',
        nameEn: 'Company Management',
        roleTitleAr: 'الإدارة العامة',
        roleTitleEn: 'General Management',
        bg: 'images/allpages/p64.png',
        textAr: 'شركة بن ربعي للسفر والسياحة تقدم خدمات سفر وسياحة متكاملة تشمل حجز تذاكر الطيران والفنادق، تنظيم البرامج السياحية الداخلية والخارجية، خدمات العمرة والحج، تأشيرات السفر، وتنظيم رحلات المجموعات. نسعى لتقديم تجربة سفر مريحة ومميزة.',
        textEn: 'Bin Rabie Travel & Tourism provides comprehensive travel and tourism services including flight and hotel bookings, domestic and international tour programs, Umrah and Hajj services, travel visas, and group trip organization. We strive to deliver a comfortable and exceptional travel experience.',
        servicesAr: ['حجز طيران وفنادق', 'برامج سياحية', 'خدمات العمرة والحج', 'تأشيرات سفر', 'رحلات مجموعات', 'سفر أعمال'],
        servicesEn: ['Flight & Hotel Booking', 'Tour Programs', 'Umrah & Hajj Services', 'Travel Visas', 'Group Trips', 'Business Travel']
    },
    business: {
        titleAr: 'بن ربعي لخدمات الأعمال المتكاملة',
        titleEn: 'Bin Rabie Integrated Business Services',
        nameAr: 'إدارة الشركة',
        nameEn: 'Company Management',
        roleTitleAr: 'الإدارة العامة',
        roleTitleEn: 'General Management',
        bg: 'images/allpages/p68.png',
        textAr: 'شركة بن ربعي لخدمات الأعمال المتكاملة تقدم مجموعة شاملة من الخدمات التي تدعم نمو وتطوير الأعمال. تشمل خدماتنا الاستشارات المالية والإدارية، تطوير البرمجيات والحلول التقنية، الدورات التدريبية والتطوير المهني، والخدمات المحاسبية والقانونية.',
        textEn: 'Bin Rabie Integrated Business Services provides a comprehensive range of services that support business growth and development. Our services include financial and management consulting, software development and technical solutions, training courses and professional development, and accounting and legal services.',
        servicesAr: ['استشارات مالية', 'تطوير برمجيات', 'دورات تدريبية', 'خدمات محاسبية', 'استشارات إدارية', 'خدمات قانونية'],
        servicesEn: ['Financial Consulting', 'Software Development', 'Training Courses', 'Accounting Services', 'Management Consulting', 'Legal Services']
    },
    delivery: {
        titleAr: 'بن ربعي لتوصيل المطاعم',
        titleEn: 'Bin Rabie Restaurant Delivery',
        nameAr: 'إدارة الشركة',
        nameEn: 'Company Management',
        roleTitleAr: 'الإدارة العامة',
        roleTitleEn: 'General Management',
        bg: 'images/allpages/p72.png',
        textAr: 'شركة بن ربعي لتوصيل المطاعم تقدم خدمات توصيل طلبات سريعة وموثوقة من المطاعم والمحلات التجارية. نمتلك فريقاً متخصصاً من السائقين وأسطولاً من المركبات المجهزة للحفاظ على جودة الطعام أثناء التوصيل. نغطي مناطق واسعة مع التزام بالمواعيد وجودة الخدمة.',
        textEn: 'Bin Rabie Restaurant Delivery provides fast and reliable order delivery services from restaurants and commercial outlets. We have a specialized team of drivers and a fleet of vehicles equipped to maintain food quality during delivery. We cover wide areas with commitment to punctuality and service quality.',
        servicesAr: ['توصيل طلبات مطاعم', 'توصيل سريع', 'تغطية واسعة', 'مركبات مبردة', 'تتبع الطلبات', 'خدمة الشركات'],
        servicesEn: ['Restaurant Order Delivery', 'Express Delivery', 'Wide Coverage', 'Refrigerated Vehicles', 'Order Tracking', 'Corporate Service']
    },
    it: {
        titleAr: 'قسم تكنولوجيا المعلومات',
        titleEn: 'Information Technology Department',
        nameAr: 'م. أحمد مصطفى العشري',
        nameEn: 'Eng. Ahmed Mostafa El-Ashry',
        roleTitleAr: 'مدير قسم تكنولوجيا المعلومات',
        roleTitleEn: 'CIO Department Manager',
        img: 'images/ahmed.jpg',
        bg: 'images/it-bg.jpg',
        textAr: 'قسم تكنولوجيا المعلومات هو الذراع التقني لمجموعة بن ربعي القابضة. يعمل القسم على تطوير الحلول البرمجية المتكاملة، إدارة البنية التحتية التقنية، وقيادة مشاريع التحول الرقمي للمجموعة. نقدم حلولاً مبتكرة في مجال تطوير المواقع والتطبيقات، الأمن السيبراني، الحوسبة السحابية، وتحليل البيانات. نسعى لتحقيق التميز الرقمي ودعم جميع شركات المجموعة بأحدث التقنيات.',
        textEn: 'The CIO Department is the technological arm of Bin Rabie Holding Group. The department works on developing integrated software solutions, managing technical infrastructure, and leading the group\'s digital transformation projects. We provide innovative solutions in web and application development, cybersecurity, cloud computing, and data analytics. We strive for digital excellence and support all group companies with the latest technologies.',
        servicesAr: ['تطوير مواقع وتطبيقات', 'الأمن السيبراني', 'الحوسبة السحابية', 'تحليل البيانات', 'التحول الرقمي', 'دعم تقني متكامل'],
        servicesEn: ['Web & App Development', 'Cybersecurity', 'Cloud Computing', 'Data Analytics', 'Digital Transformation', 'Full IT Support']
    }
};

// ===== DOM Elements =====
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const langBtn = document.getElementById('langBtn');
const menuBtn = document.getElementById('menuBtn');
const btt = document.getElementById('btt');
const particles = document.getElementById('particles');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');

// ===== State =====
let isEn = false;

// ===== Intro Cinema (Logo + Name Assembly) =====
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('loaderLogo');
    const textWrap = document.getElementById('loaderText');
    const isAr = document.documentElement.lang === 'ar';
    const companyName = isAr ? 'مجموعة بن ربعي القابضة' : 'Bin Rabie Holding Group';
    const words = companyName.split(/\s+/);

    // Phase 1: Logo appears (after 300ms)
    setTimeout(() => {
        logo.classList.add('show');
    }, 300);

    // Phase 2: Words assemble below logo (after logo appears)
    const cinemaWords = [];
    words.forEach((word, i) => {
        const el = document.createElement('span');
        el.classList.add('loader-cinema-word');
        el.textContent = word;
        const angle = Math.random() * Math.PI * 2;
        const dist = 300 + Math.random() * 400;
        el.style.setProperty('--sx', Math.cos(angle) * dist + 'px');
        el.style.setProperty('--sy', Math.sin(angle) * dist + 'px');
        el.style.setProperty('--sr', ((Math.random() - 0.5) * 120) + 'deg');
        textWrap.appendChild(el);
        if (i < words.length - 1) textWrap.appendChild(document.createTextNode(' '));
        cinemaWords.push(el);
    });

    const phase2Start = 1600; // after logo intro finishes
    setTimeout(() => {
        textWrap.classList.add('show');
        cinemaWords.forEach((el, i) => {
            setTimeout(() => el.classList.add('phase-fly'), i * 200);
        });
    }, phase2Start);

    // Phase 3: Grow + Glow
    const phase3Start = phase2Start + cinemaWords.length * 200 + 400;
    setTimeout(() => {
        textWrap.classList.add('phase-grow');
        cinemaWords.forEach(el => el.classList.add('phase-glow'));
    }, phase3Start);

    // Phase 4: Fade out loader, reveal page
    const phase4Start = phase3Start + 1400;
    setTimeout(() => {
        loader.classList.add('hide');
        initTextSplit();
    }, phase4Start);

    initAll();
});

// ===== Language Toggle =====
langBtn.addEventListener('click', () => {
    isEn = !isEn;
    document.body.classList.toggle('en', isEn);
    document.documentElement.setAttribute('dir', isEn ? 'ltr' : 'rtl');
    document.documentElement.setAttribute('lang', isEn ? 'en' : 'ar');
    langBtn.textContent = isEn ? 'AR' : 'EN';

    // Update nav links text
    navLinks.querySelectorAll('a').forEach(a => {
        const ar = a.getAttribute('data-ar');
        const en = a.getAttribute('data-en');
        if (ar && en) a.textContent = isEn ? en : ar;
    });
});

// ===== Navbar Scroll =====
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    btt.classList.toggle('show', window.scrollY > 500);
    updateActiveNav();
});

// ===== Mobile Menu =====
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('on');
    navLinks.classList.toggle('on');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('on');
        navLinks.classList.remove('on');
    });
});

// ===== Back to Top =====
btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Active Nav =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = navLinks.querySelector(`a[href="#${id}"]`);
        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Scroll Animations (AOS) =====
function initAOS() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('vis');
                }, parseInt(delay));
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

// ===== Counter Animation =====
function initCounters() {
    const counters = document.querySelectorAll('.hstat-num[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                const duration = 2000;
                const start = performance.now();

                function tick(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    entry.target.textContent = Math.floor(target * ease);
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        entry.target.textContent = target;
                    }
                }
                requestAnimationFrame(tick);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ===== Canvas Particles with Connections =====
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none';
    particles.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let w, h;
    const pts = [];
    const count = 60;
    const maxDist = 120;

    function resize() {
        w = canvas.width = particles.offsetWidth;
        h = canvas.height = particles.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < count; i++) {
        pts.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5 - 0.2,
            r: Math.random() * 2.5 + 1,
            o: Math.random() * 0.5 + 0.1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);

        // Draw connections
        for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const dx = pts[i].x - pts[j].x;
                const dy = pts[i].y - pts[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.strokeStyle = `rgba(232,101,26,${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // Draw and update particles
        pts.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(232,101,26,${p.o})`;
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) { p.y = h; p.vy = -(Math.random() * 0.5 + 0.1); }
        });

        requestAnimationFrame(draw);
    }
    draw();
}

// ===== Companies Filter =====
function initFilter() {
    const btns = document.querySelectorAll('.fbtn');
    const cards = document.querySelectorAll('.co-card');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-f');

            cards.forEach((card, i) => {
                const cat = card.getAttribute('data-cat');
                if (filter === 'all' || cat === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = `fadeInCard .5s ease ${i * 0.05}s forwards`;
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===== Contact Form =====
function initContact() {
    if (!contactForm) return;
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.submit-btn');
        const original = btn.innerHTML;
        btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${isEn ? 'Sending...' : 'جاري الإرسال...'}`;
        btn.disabled = true;
        btn.style.opacity = '.7';

        setTimeout(() => {
            btn.innerHTML = `<i class="fas fa-check"></i> ${isEn ? 'Sent Successfully!' : 'تم الإرسال بنجاح!'}`;
            btn.style.background = '#27ae60';
            btn.style.opacity = '1';

            setTimeout(() => {
                btn.innerHTML = original;
                btn.style.background = '';
                btn.disabled = false;
                contactForm.reset();
            }, 3000);
        }, 1500);
    });
}

// ===== Modal - CV Style =====
const svcIcons = ['fa-cog','fa-tools','fa-chart-line','fa-shield-alt','fa-cube','fa-bolt','fa-star','fa-gem','fa-layer-group','fa-rocket'];

function openModal(id) {
    const data = modalData[id];
    if (!data) return;

    const isLeader = ['chairman', 'member1', 'member2', 'member3', 'ceo', 'operations', 'accounts', 'itm', 'hr', 'parcels', 'qader', 'apps'].includes(id);
    const hasImg = data.img && data.img.length > 0;

    const title = isEn ? data.titleEn : data.titleAr;
    const name = isEn ? data.nameEn : data.nameAr;
    const text = isEn ? data.textEn : data.textAr;
    const services = isEn ? data.servicesEn : data.servicesAr;
    const roleTitle = data.roleTitleAr
        ? (isEn ? data.roleTitleEn : data.roleTitleAr)
        : (isEn ? data.titleEn : data.titleAr);

    const msgLabel = isLeader ? (isEn ? 'Message' : 'الرسالة') : (isEn ? 'About' : 'نبذة تعريفية');
    const svcLabel = isLeader ? (isEn ? 'Focus Areas' : 'مجالات التركيز') : (isEn ? 'Services' : 'الخدمات');

    // Photo HTML
    const photoHTML = hasImg
        ? `<img src="${data.img}" alt="${name}">`
        : `<div class="cv-photo-placeholder"><i class="fas fa-user-tie"></i></div>`;

    // Services HTML
    const svcHTML = services.map((s, i) =>
        `<div class="cv-svc"><div class="cv-svc-icon"><i class="fas ${svcIcons[i % svcIcons.length]}"></i></div><span>${s}</span></div>`
    ).join('');

    if (isLeader) {
        // Leader CV - full profile layout
        modalBody.innerHTML = `
            ${data.bg ? `<div class="cv-leader-bg" style="background-image:url('${data.bg}')"></div>` : ''}
            <div class="cv-left">
                <div class="cv-photo">${photoHTML}</div>
                <div class="cv-name">${name}</div>
                <div class="cv-title-badge">${title}</div>
                <div class="cv-info-card">
                    <h4><i class="fas fa-building"></i> ${isEn ? 'Organization' : 'المنظمة'}</h4>
                    <p>${isEn ? 'Bin Rabie Holding Group' : 'مجموعة بن ربعي القابضة'}</p>
                </div>
                <div class="cv-info-card">
                    <h4><i class="fas fa-map-marker-alt"></i> ${isEn ? 'Location' : 'الموقع'}</h4>
                    <p>${isEn ? 'Jeddah, Saudi Arabia' : 'جدة، المملكة العربية السعودية'}</p>
                </div>
            </div>
            <div class="cv-right">
                <div class="cv-section">
                    <div class="cv-section-title"><i class="fas fa-quote-right"></i> ${msgLabel}</div>
                    <p class="cv-message">${text}</p>
                </div>
                <div class="cv-section">
                    <div class="cv-section-title"><i class="fas fa-bullseye"></i> ${svcLabel}</div>
                    <div class="cv-services">${svcHTML}</div>
                </div>
            </div>`;
    } else {
        // Company CV - banner + manager info
        const mgrName = isEn ? data.nameEn : data.nameAr;
        const companyTitle = isEn ? data.titleEn : data.titleAr;
        const mgrRole = roleTitle;
        const mgrImg = data.img && data.img.length > 0;
        const mgrPhotoHTML = mgrImg
            ? `<img src="${data.img}" alt="${mgrName}">`
            : `<div class="cv-photo-placeholder"><i class="fas fa-building"></i></div>`;

        modalBody.innerHTML = `
            <div class="cv-company-banner" style="background-image:url('${data.bg || ''}')">
                <div class="cv-banner-content">
                    <div>
                        <h2>${companyTitle}</h2>
                        <p>${isEn ? 'Bin Rabie Holding Group' : 'مجموعة بن ربعي القابضة'}</p>
                    </div>
                </div>
            </div>
            <div class="cv-left">
                <div class="cv-photo">${mgrPhotoHTML}</div>
                <div class="cv-name">${mgrName}</div>
                <div class="cv-title-badge">${mgrRole}</div>
                <div class="cv-info-card">
                    <h4><i class="fas fa-briefcase"></i> ${isEn ? 'Company' : 'الشركة'}</h4>
                    <p>${companyTitle}</p>
                </div>
                <div class="cv-info-card">
                    <h4><i class="fas fa-map-marker-alt"></i> ${isEn ? 'Location' : 'الموقع'}</h4>
                    <p>${isEn ? 'Saudi Arabia' : 'المملكة العربية السعودية'}</p>
                </div>
            </div>
            <div class="cv-right">
                <div class="cv-section">
                    <div class="cv-section-title"><i class="fas fa-info-circle"></i> ${msgLabel}</div>
                    <p class="cv-message">${text}</p>
                </div>
                <div class="cv-section">
                    <div class="cv-section-title"><i class="fas fa-cogs"></i> ${svcLabel}</div>
                    <div class="cv-services">${svcHTML}</div>
                </div>
            </div>`;
    }

    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===== FadeIn Keyframe for Filter =====
const styleEl = document.createElement('style');
styleEl.textContent = `
    @keyframes fadeInCard {
        from { opacity: 0; transform: translateY(20px) scale(.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
`;
document.head.appendChild(styleEl);

// ===== Scroll Progress Bar =====
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        bar.style.width = progress + '%';
    });
}

// ===== Mouse Glow Follower =====
function initMouseGlow() {
    const glow = document.getElementById('mouseGlow');
    if (!glow) return;
    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

// ===== Parallax Hero Background =====
function initParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroBg.style.transform = `scale(${1 + scrollY * 0.0001}) translateY(${scrollY * 0.3}px)`;
        }
    });
}

// ===== 3D Tilt Effect on Company Cards =====
function initTilt() {
    const cards = document.querySelectorAll('.co-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ===== Section heading line animation =====
function initHeadingLines() {
    const headings = document.querySelectorAll('.sec-head h2');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('line-vis');
            }
        });
    }, { threshold: 0.5 });

    headings.forEach(h => observer.observe(h));
}

// ===== Section separator animation =====
function initSectionSeparators() {
    const sections = document.querySelectorAll('.sec');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('vis-sec');
            }
        });
    }, { threshold: 0.05 });

    sections.forEach(s => observer.observe(s));
}

// ===== Hero text typing effect =====
function initTypingEffect() {
    const heroSub = document.querySelector('.hero-sub');
    if (!heroSub) return;

    const arSpan = heroSub.querySelector('.t-ar');
    const enSpan = heroSub.querySelector('.t-en');
    if (!arSpan) return;

    const arText = arSpan.textContent;
    const enText = enSpan ? enSpan.textContent : '';

    arSpan.textContent = '';
    if (enSpan) enSpan.textContent = '';

    let i = 0;
    function typeAr() {
        if (i < arText.length) {
            arSpan.textContent += arText.charAt(i);
            if (enSpan && i < enText.length) {
                enSpan.textContent += enText.charAt(i);
            }
            i++;
            setTimeout(typeAr, 60);
        }
    }

    setTimeout(typeAr, 1200);
}

// ===== Magnetic button effect =====
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.hero-cta, .submit-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// ===== Stats counter glow effect =====
function initStatsHoverGlow() {
    const stats = document.querySelectorAll('.hstat');
    stats.forEach(stat => {
        stat.style.cursor = 'default';
        stat.addEventListener('mouseenter', () => {
            stat.style.transform = 'scale(1.1)';
            stat.style.transition = 'transform .3s ease';
        });
        stat.addEventListener('mouseleave', () => {
            stat.style.transform = 'scale(1)';
        });
    });
}


// ===== Card Spotlight (light follows mouse) =====
function initCardSpotlight() {
    const cards = document.querySelectorAll('.co-card, .vmg-card, .board-card');
    cards.forEach(card => {
        // Create spotlight div
        const spotlight = document.createElement('div');
        spotlight.classList.add('card-spotlight');
        card.appendChild(spotlight);

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            spotlight.style.setProperty('--x', x + '%');
            spotlight.style.setProperty('--y', y + '%');
        });
    });
}

// ===== Hero Title Reveal (after intro cinema) =====
function initTextSplit() {
    const title = document.querySelector('.split-text');
    if (!title) return;

    // Split both language spans into .split-word elements
    const allSpans = title.querySelectorAll('.t-ar, .t-en');
    allSpans.forEach(span => {
        const text = span.textContent.trim();
        span.innerHTML = '';
        text.split(/\s+/).forEach((word, i) => {
            const el = document.createElement('span');
            el.classList.add('split-word');
            el.textContent = word;
            span.appendChild(el);
            if (i < text.split(/\s+/).length - 1) {
                span.appendChild(document.createTextNode(' '));
            }
        });
    });

    // Reveal hero title words with stagger
    setTimeout(() => {
        const heroWords = title.querySelectorAll('.split-word');
        heroWords.forEach((el, i) => {
            setTimeout(() => el.classList.add('revealed'), i * 100);
        });
    }, 300);
}

// ===== Animated Counter Rings for Stats =====
function initCounterRings() {
    const stats = document.querySelectorAll('.hstat');
    const maxRef = 500; // max reference for ring

    stats.forEach(stat => {
        const numEl = stat.querySelector('.hstat-num');
        if (!numEl) return;
        const count = parseInt(numEl.getAttribute('data-count'));

        const ring = document.createElement('div');
        ring.classList.add('hstat-ring');
        const offset = 283 - (count / maxRef) * 283;
        ring.innerHTML = `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45"></circle><circle class="ring-progress" cx="50" cy="50" r="45" style="--offset:${offset}"></circle></svg>`;
        stat.insertBefore(ring, stat.firstChild);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    ring.querySelector('.ring-progress').classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(stat);
    });
}

// ===== Goals list stagger animation =====
function initGoalsAnimation() {
    const goals = document.querySelectorAll('.goals');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('goals-vis');
            }
        });
    }, { threshold: 0.3 });
    goals.forEach(g => observer.observe(g));
}

// ===== Filter button ripple position =====
function initFilterRipple() {
    const btns = document.querySelectorAll('.fbtn');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            btn.style.setProperty('--rx', x + '%');
            btn.style.setProperty('--ry', y + '%');
        });
    });
}

// ===== Smooth Parallax for Section Backgrounds =====
function initSectionParallax() {
    const secBgs = document.querySelectorAll('.sec-bg');
    window.addEventListener('scroll', () => {
        secBgs.forEach(bg => {
            const section = bg.parentElement;
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                bg.style.transform = `translateY(${(progress - 0.5) * 40}px)`;
            }
        });
    });
}

// ===== Hero Mouse Parallax (content moves slightly on mouse) =====
function initHeroMouseParallax() {
    const heroContent = document.querySelector('.hero-content');
    const heroShapes = document.querySelector('.hero-shapes');
    if (!heroContent) return;

    document.querySelector('.hero')?.addEventListener('mousemove', e => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const mx = (e.clientX - w / 2) / w;
        const my = (e.clientY - h / 2) / h;

        heroContent.style.transform = `translate(${mx * -8}px, ${my * -8}px)`;
        if (heroShapes) {
            heroShapes.style.transform = `translate(${mx * 15}px, ${my * 15}px)`;
        }
    });
}

// ===== Smooth number scroll (odometer feel) =====
function initSmoothCounters() {
    const counters = document.querySelectorAll('.hstat-num');
    counters.forEach(counter => {
        counter.style.transition = 'transform .2s ease';
        let lastVal = 0;
        const observer = new MutationObserver(() => {
            const newVal = parseInt(counter.textContent) || 0;
            if (newVal > lastVal) {
                counter.style.transform = 'translateY(-2px)';
                setTimeout(() => { counter.style.transform = 'translateY(0)'; }, 100);
            }
            lastVal = newVal;
        });
        observer.observe(counter, { childList: true, characterData: true, subtree: true });
    });
}

// ===== Scroll velocity glow intensity =====
function initScrollVelocityGlow() {
    const progress = document.getElementById('scrollProgress');
    if (!progress) return;
    let lastScroll = 0;
    let velocity = 0;

    window.addEventListener('scroll', () => {
        velocity = Math.abs(window.scrollY - lastScroll);
        lastScroll = window.scrollY;
        const glow = Math.min(velocity * 0.5, 25);
        progress.style.boxShadow = `0 0 ${10 + glow}px rgba(232,101,26,${0.5 + velocity * 0.01})`;
        progress.style.height = `${Math.min(3 + velocity * 0.05, 5)}px`;
    });
}

// ===== Navbar Logo Animation =====
function initLogoHover() {
    const logo = document.querySelector('.logo');
    if (!logo) return;
    logo.addEventListener('mouseenter', () => {
        const img = logo.querySelector('.logo-img');
        if (img) {
            img.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1)';
            img.style.transform = 'rotate(-10deg) scale(1.1)';
        }
    });
    logo.addEventListener('mouseleave', () => {
        const img = logo.querySelector('.logo-img');
        if (img) img.style.transform = '';
    });
}

// ===== Init All =====
function initAll() {
    initParticles();
    initAOS();
    initCounters();
    initFilter();
    initContact();
    initScrollProgress();
    initMouseGlow();
    initParallax();
    initTilt();
    initHeadingLines();
    initSectionSeparators();
    initTypingEffect();
    initMagneticButtons();
    initStatsHoverGlow();
    initCardSpotlight();
    initCounterRings();
    initGoalsAnimation();
    initFilterRipple();
    initSectionParallax();
    initHeroMouseParallax();
    initSmoothCounters();
    initScrollVelocityGlow();
    initLogoHover();
}
