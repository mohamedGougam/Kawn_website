export type Locale = "en" | "ar";

export const translations = {
  en: {
    common: {
      download: "Download",
      viewPdf: "View PDF",
      contact: "Contact Us",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      effectiveDate: "Effective",
      sending: "Sending...",
      messageSent: "Message Sent!",
      done: "Done",
      close: "Close",
    },
    nav: {
      values: "Values",
      communities: "Communities",
      events: "Events",
      discover: "Discover",
      download: "Download",
    },
    buttons: {
      downloadKawn: "Download Kawn",
      download: "Download",
    },
    storeBadges: {
      apple: "Download on",
      google: "Get it on",
    },
    legal: {
      privacy_policy: {
        title: "Privacy Policy",
        description: "How Kawn collects, uses, and protects your personal data. Covers data storage, third-party sharing, user rights, and GDPR/CCPA compliance.",
      },
      terms_of_service: {
        title: "Terms of Service",
        description: "The binding agreement between you and Kawn governing your use of the platform, your responsibilities, and Kawn's rights.",
      },
      community_guidelines: {
        title: "Community Guidelines",
        description: "Our standards for maintaining a respectful and safe environment. Defines acceptable behavior and prohibited content.",
      },
      content_moderation_reporting_policy: {
        title: "Content Moderation",
        description: "How we review and handle reported content. Explains our moderation process, strike system, and appeals.",
      },
      safety_abuse_policy: {
        title: "Safety & Abuse",
        description: "Protection against harassment, hate speech, and harmful behavior. Outlines our commitment to user safety.",
      },
      account_data_deletion_policy: {
        title: "Account & Data Deletion",
        description: "Instructions and policies for removing your account and associated personal data from our systems.",
      },
    },
    hero: {
      badge: "Modern social app",
      title: "Built around",
      titleAccent: "communities",
      subtitle: "Kawn is a community-first social platform designed for healthier conversations, safer digital spaces, and meaningful human connections.",
      platforms: "Available on iPhone and Android",
    },
    footer: {
      tagline: "Kawn — community-first social built for respect, safety, and meaningful connection",
      copyright: "All rights reserved.",
    },
    contact: {
      title: "Contact Support",
      subtitle: "We reply within 24 hours",
      nameLabel: "Your Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email Address",
      emailPlaceholder: "you@example.com",
      categoryLabel: "Category",
      subjectLabel: "Subject",
      subjectPlaceholder: "Brief summary of your issue",
      messageLabel: "Message",
      messagePlaceholder: "Describe your issue in detail...",
      sendButton: "Send Message",
      successMessage: "Your message has been sent successfully! Our support team will get back to you shortly.",
      errorMessage: "Something went wrong. Please try again.",
      connectionError: "Connection error. Please check your internet connection.",
      footerNote: "Sent to support@kawn.io",
    },
    categories: {
      bug: "Bug Report",
      account: "Account Issue",
      billing: "Billing",
      content: "Content Issue",
      other: "Other",
    },
    appPreview: {
      title: "A polished app,",
      titleAccent: "built for mobile",
      description: "Fast, readable, and thoughtfully designed—Kawn feels as refined as the communities inside it, with a calm, modern experience you can trust."
    },
    communities: {
      title: "Find Your Communities",
      description: "Communities are the heart of Kawn—thoughtful spaces to gather around shared interests, follow what you care about, and meet people who get it.",
      highlights: [
        "Interest-based groups",
        "Community-first spaces",
        "Shared passions",
        "A calmer place to belong"
      ]
    },
    downloadSection: {
      title: "Download Kawn Today",
      description: "Join a healthier social platform built around communities, respect, safety, and meaningful human connection.",
      trademarks: "Apple and the Apple logo are trademarks of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC."
    },
    events: {
      title: "Bring Communities Into Real Life",
      description: "Take what you discover online into real life—create and join events, meetups, and experiences that strengthen the communities you already care about.",
      highlights: [
        "Create and join events",
        "Discover activities nearby",
        "Build real connections"
      ]
    },
    humanFuture: {
      title: "The Future of Social Media Should Feel Human Again",
      description: "Kawn believes social media should empower people, not divide them. That's why Kawn focuses on freedom of expression with respect, safe digital spaces for families and children, positive communities, real knowledge exchange, and AI that supports people.",
      highlights: [
        "Freedom of expression with respect",
        "Safer spaces for children and families",
        "Positive and healthy communities",
        "Real knowledge and experience exchange",
        "AI that supports communities"
      ]
    },
    people: {
      eyebrow: "Discovery & conversation",
      title: "Find people and ideas",
      titleAccent: "worth your attention",
      description: "Explore profiles, posts, and threads with a feed tuned for relevance—so discovery stays social and conversations stay meaningful.",
      themes: [
        "Discovery",
        "People",
        "Posts",
        "Replies",
        "Relevance"
      ]
    },
    whatMakesKawnDifferent: {
      eyebrow: "What Makes Kawn Different",
      title: "A Social Network Built Around Human Values",
      description: "Kawn is not designed to maximize addiction, outrage, or division. It is designed to help people build healthier, safer, and more meaningful digital communities.",
      cards: {
        freedom: {
          title: "Freedom of Speech with Responsibility",
          description: "Kawn encourages open conversations and respectful expression without promoting hate, harassment, or toxic behavior."
        },
        families: {
          title: "Safe Spaces for Families",
          description: "Children deserve a safer digital world, and parents deserve visibility and peace of mind through safer, age-aware experiences."
        },
        communities: {
          title: "Positive Digital Communities",
          description: "Kawn encourages positive interactions, respectful discussions, shared passions, and healthier community engagement."
        },
        knowledge: {
          title: "True Knowledge & Experience Exchange",
          description: "Kawn supports real conversations, cultural exchange, learning communities, professional insights, and shared human experience."
        },
        ai: {
          title: "AI That Supports People",
          description: "KawnAI is designed to support communities through discovery, guidance, and safer interactions — not manipulate users into endless scrolling."
        }
      }
    },
    whyKawn: {
      title: "Why People Choose Kawn",
      subtitle: "One App. One Community. One Place.",
      description: "Why switch between multiple apps when everything can live in one place? Kawn brings together communities, conversations, content creation, discovery, messaging, events, and real-world connections into a single platform designed around people and their interests.",
      sections: [
        {
          title: "Freedom of Expression",
          description: "Kawn encourages open dialogue, diverse perspectives, and respectful conversations. We believe freedom of expression should empower people to share ideas, exchange experiences, and strengthen communities while promoting respect and responsibility."
        },
        {
          title: "Guardian-Verified Child Safety",
          description: "Children deserve a safer digital world, and parents deserve peace of mind. For users under 16, Kawn requires guardian authentication before account activation. Parents and guardians become part of the onboarding journey, creating a verified guardian-minor relationship that promotes transparency, accountability, and safer digital experiences. Because protecting younger generations should not be an afterthought."
        },
        {
          title: "KawnPulse — Your Interests, All in One Place",
          description: "Stay informed without jumping between dozens of platforms. KawnPulse uses AI to gather, organize, and summarize the latest news, discussions, updates, and trends related to the topics that matter most to you. One place. Your interests. Always up to date."
        },
        {
          title: "Communities at the Heart of Everything",
          description: "Sports, entertainment, gaming, technology, business, education, culture, travel, and thousands of other interests. Kawn is built around communities first, helping people discover meaningful connections through shared passions, experiences, and goals."
        },
        {
          title: "AI-Powered Content Creation",
          description: "Create, enhance, and share content with confidence. From images and videos to captions, summaries, and creative inspiration, Kawn provides AI-powered tools that help bring ideas to life while keeping creativity in the hands of users."
        },
        {
          title: "Better Content Quality Without Limiting Creativity",
          description: "Quality should be encouraged, not enforced. Kawn promotes valuable, engaging, and authentic content while respecting different cultures, opinions, communication styles, and creative expression. We help communities discover quality content without restricting individuality."
        },
        {
          title: "Everything You Expect From Modern Social Media",
          description: "Posts, stories, reels, community groups, messaging, audio calls, video calls, events, content sharing, and much more. All designed to work together in one connected and community-driven experience."
        },
        {
          title: "Help Shape the Future of Social Media",
          description: "Social media should bring people together, not push them apart. Kawn is building a healthier digital ecosystem based on communities, meaningful conversations, freedom of expression, family safety, and positive human connection. If you believe in a better future for social media, help us grow by sharing Kawn with your friends, family, colleagues, and communities. Together, we can build a more human social experience."
        }
      ]
    }
  },
  ar: {
    common: {
      download: "تحميل",
      viewPdf: "عرض PDF",
      contact: "اتصل بنا",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      effectiveDate: "ساري من",
      sending: "جاري الإرسال...",
      messageSent: "تم إرسال الرسالة!",
      done: "تم",
      close: "إغلاق",
    },
    nav: {
      values: "قيمنا",
      communities: "المجتمعات",
      events: "الفعاليات",
      discover: "اكتشف",
      download: "تحميل",
    },
    buttons: {
      downloadKawn: "تحميل كون",
      download: "تحميل",
    },
    storeBadges: {
      apple: "تحميل من",
      google: "احصل عليه من",
    },
    legal: {
      privacy_policy: {
        title: "سياسة الخصوصية",
        description: "كيف يقوم كون بجمع واستخدام وحماية بياناتك الشخصية. يغطي تخزين البيانات، والمشاركة مع أطراف ثالثة، وحقوق المستخدم، والامتثال للقوانين العالمية.",
      },
      terms_of_service: {
        title: "شروط الخدمة",
        description: "الاتفاقية الملزمة بينك وبين كون التي تحكم استخدامك للمنصة ومسؤولياتك وحقوق كون.",
      },
      community_guidelines: {
        title: "إرشادات المجتمع",
        description: "معاييرنا للحفاظ على بيئة محترمة وآمنة. تحدد السلوك المقبول والمحتوى المحظور.",
      },
      content_moderation_reporting_policy: {
        title: "الإشراف على المحتوى",
        description: "كيف نقوم بمراجعة والتعامل مع المحتوى المبلغ عنه. يشرح عملية الإشراف ونظام المخالفات والالتماسات.",
      },
      safety_abuse_policy: {
        title: "الأمان والإساءة",
        description: "الحماية من التحرش وخطاب الكراهية والسلوك الضار. يحدد التزامنا بسلامة المستخدم.",
      },
      account_data_deletion_policy: {
        title: "حذف الحساب والبيانات",
        description: "التعليمات والسياسات الخاصة بإزالة حسابك والبيانات الشخصية المرتبطة به من أنظمتنا.",
      },
    },
    hero: {
      badge: "تطبيق اجتماعي عصري",
      title: "مبني حول",
      titleAccent: "المجتمعات",
      subtitle: "كون هي منصة اجتماعية تركز على المجتمع، مصممة لمحادثات أكثر صحة، ومساحات رقمية أكثر أمانًا، واتصالات بشرية ذات مغزى.",
      platforms: "متوفر على آيفون وأندرويد",
    },
    footer: {
      tagline: "كون — تواصل اجتماعي يركز على المجتمع، مبني على الاحترام والأمان والتواصل الهادف",
      copyright: "جميع الحقوق محفوظة.",
    },
    contact: {
      title: "اتصل بالدعم",
      subtitle: "نرد خلال 24 ساعة",
      nameLabel: "اسمك",
      namePlaceholder: "اسمك",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      categoryLabel: "الفئة",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "ملخص موجز لمشكلتك",
      messageLabel: "الرسالة",
      messagePlaceholder: "صف مشكلتك بالتفصيل...",
      sendButton: "إرسال الرسالة",
      successMessage: "تم إرسال رسالتك بنجاح! سيتواصل معك فريق الدعم قريباً.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      connectionError: "خطأ في الاتصال. يرجى التحقق من اتصالك بالإنترنت.",
      footerNote: "ترسل إلى support@kawn.io",
    },
    categories: {
      bug: "تقرير خطأ",
      account: "مشكلة في الحساب",
      billing: "الفواتير",
      content: "مشكلة في المحتوى",
      other: "أخرى",
    },
    appPreview: {
      title: "تطبيق متقن،",
      titleAccent: "مصمم للهواتف",
      description: "سريع ومقروء ومصمم بعناية — يبدو كون راقيًا كالمجتمعات الموجودة بداخله، مع تجربة هادئة وعصرية يمكنك الوثوق بها."
    },
    communities: {
      title: "ابحث عن مجتمعاتك",
      description: "المجتمعات هي قلب كون — مساحات مدروسة للتجمع حول الاهتمامات المشتركة، ومتابعة ما يهمك، ومقابلة أشخاص يشبهونك.",
      highlights: [
        "مجموعات مبنية على الاهتمام",
        "مساحات تركز على المجتمع",
        "شغف مشترك",
        "مكان أكثر هدوءًا للانتماء"
      ]
    },
    downloadSection: {
      title: "حمل كون اليوم",
      description: "انضم إلى منصة اجتماعية أكثر صحة مبنية حول المجتمعات والاحترام والأمان والتواصل البشري الهادف.",
      trademarks: "آبل وشعار آبل هي علامات تجارية لشركة آبل. جوجل بلاي وشعار جوجل بلاي هي علامات تجارية لشركة جوجل."
    },
    events: {
      title: "انقل المجتمعات إلى الحياة الواقعية",
      description: "انقل ما تكتشفه على الإنترنت إلى الحياة الواقعية — أنشئ وشارك في الفعاليات واللقاءات والتجارب التي تقوي المجتمعات التي تهتم بها.",
      highlights: [
        "إنشاء والمشاركة في الفعاليات",
        "اكتشاف الأنشطة القريبة",
        "بناء اتصالات حقيقية"
      ]
    },
    humanFuture: {
      title: "يجب أن يبدو مستقبل وسائل التواصل الاجتماعي إنسانيًا مرة أخرى",
      description: "يؤمن كون بأن وسائل التواصل الاجتماعي يجب أن تمكن الناس، لا أن تفرقهم. لهذا السبب يركز كون على حرية التعبير مع الاحترام، والمساحات الرقمية الآمنة للعائلات والأطفال، والمجتمعات الإيجابية، والتبادل الحقيقي للمعرفة، والذكاء الاصطناعي الذي يدعم الناس.",
      highlights: [
        "حرية التعبير مع الاحترام",
        "مساحات أكثر أمانًا للأطفال والعائلات",
        "مجتمعات إيجابية وصحية",
        "تبادل حقيقي للمعرفة والخبرات",
        "ذكاء اصطناعي يدعم المجتمعات"
      ]
    },
    people: {
      eyebrow: "اكتشاف ومحادثات",
      title: "ابحث عن أشخاص وأفكار",
      titleAccent: "تستحق اهتمامك",
      description: "استكشف الملفات الشخصية والمنشورات والمواضيع مع موجز مخصص للأهمية — بحيث يظل الاكتشاف اجتماعيًا وتبقى المحادثات هادفة.",
      themes: [
        "اكتشاف",
        "أشخاص",
        "منشورات",
        "ردود",
        "ملاءمة"
      ]
    },
    whatMakesKawnDifferent: {
      eyebrow: "ما الذي يميز كون",
      title: "شبكة اجتماعية مبنية حول القيم الإنسانية",
      description: "لم يتم تصميم كون لزيادة الإدمان أو الغضب أو الانقسام. بل تم تصميمه لمساعدة الناس على بناء مجتمعات رقمية أكثر صحة وأمانًا وأهمية.",
      cards: {
        freedom: {
          title: "حرية التعبير بمسؤولية",
          description: "يشجع كون المحادثات المفتوحة والتعبير المحترم دون الترويج للكراهية أو التحرش أو السلوك السام."
        },
        families: {
          title: "مساحات آمنة للعائلات",
          description: "يستحق الأطفال عالمًا رقميًا أكثر أمانًا، ويستحق الآباء الرؤية وراحة البال من خلال تجارب أكثر أمانًا ووعيًا بالعمر."
        },
        communities: {
          title: "مجتمعات رقمية إيجابية",
          description: "يشجع كون التفاعلات الإيجابية والمناقشات المحترمة والشغف المشترك والمشاركة المجتمعية الأكثر صحة."
        },
        knowledge: {
          title: "تبادل حقيقي للمعرفة والخبرة",
          description: "يدعم كون المحادثات الحقيقية والتبادل الثقافي ومجتمعات التعلم والرؤى المهنية والتجربة البشرية المشتركة."
        },
        ai: {
          title: "ذكاء اصطناعي يدعم الناس",
          description: "تم تصميم ذكاء كون الاصطناعي لدعم المجتمعات من خلال الاكتشاف والتوجيه والتفاعلات الأكثر أمانًا — وليس التلاعب بالمستخدمين في التمرير اللانهائي."
        }
      }
    },
    whyKawn: {
      title: "لماذا يختار الناس Kawn؟",
      subtitle: "تطبيق واحد. مجتمع واحد. مكان واحد.",
      description: "لماذا تحتاج إلى التنقل بين عشرات التطبيقات بينما يمكن أن تجد كل ما تحتاجه في مكان واحد؟ يجمع Kawn بين المجتمعات، والمحادثات، وإنشاء المحتوى، واكتشاف الاهتمامات، والمراسلة، والفعاليات، والتواصل الواقعي في منصة واحدة مصممة حول الإنسان واهتماماته.",
      sections: [
        {
          title: "حرية التعبير",
          description: "يشجع Kawn الحوار المفتوح، وتبادل الآراء، واحترام وجهات النظر المختلفة. نؤمن بأن حرية التعبير يجب أن تكون وسيلة لبناء المجتمعات وتقوية الروابط بين الناس، مع الحفاظ على الاحترام والمسؤولية المتبادلة."
        },
        {
          title: "أمان الأطفال بإشراف أولياء الأمور",
          description: "يستحق الأطفال عالماً رقمياً أكثر أماناً، ويستحق أولياء الأمور راحة البال. للمستخدمين دون سن 16 عاماً، يتطلب Kawn مصادقة ولي الأمر قبل تفعيل الحساب. ويصبح ولي الأمر جزءاً من رحلة التسجيل، مما ينشئ علاقة موثقة بين الطفل وولي أمره داخل المنصة، لتعزيز الشفافية والمسؤولية وتوفير تجربة رقمية أكثر أماناً. لأن حماية الأجيال القادمة يجب أن تكون جزءاً أساسياً من تصميم المنصة، لا مجرد إضافة لاحقة."
        },
        {
          title: "KawnPulse — اهتماماتك في مكان واحد",
          description: "ابقَ على اطلاع دون الحاجة للتنقل بين عشرات المواقع والتطبيقات. يستخدم KawnPulse الذكاء الاصطناعي لجمع وتنظيم وتلخيص أحدث الأخبار والنقاشات والتحديثات والاتجاهات المتعلقة بالمواضيع التي تهمك. مكان واحد. اهتماماتك. وكل ما هو جديد بين يديك."
        },
        {
          title: "المجتمعات في قلب كل شيء",
          description: "رياضة، ترفيه، ألعاب، تقنية، أعمال، تعليم، ثقافة، سفر، وآلاف الاهتمامات الأخرى. تم تصميم Kawn حول المجتمعات أولاً، لمساعدة الناس على بناء علاقات حقيقية من خلال الاهتمامات والتجارب والأهداف المشتركة."
        },
        {
          title: "أدوات إنشاء المحتوى المدعومة بالذكاء الاصطناعي",
          description: "أنشئ وطور وشارك محتواك بثقة. من الصور ومقاطع الفيديو إلى النصوص والوصف والملخصات والأفكار الإبداعية، يوفر Kawn أدوات ذكية تساعدك على تحويل أفكارك إلى محتوى مميز مع الحفاظ على إبداعك وأسلوبك الخاص."
        },
        {
          title: "محتوى أفضل دون تقييد الإبداع",
          description: "نؤمن بأن جودة المحتوى يجب أن تُشجَّع لا أن تُفرض. يساعد Kawn المستخدمين على اكتشاف المحتوى القيّم والهادف مع احترام الثقافات المختلفة والآراء المتنوعة وأساليب التعبير والإبداع الفردي. نحن نشجع الجودة دون المساس بحرية التعبير."
        },
        {
          title: "كل ما تتوقعه من منصة تواصل اجتماعي حديثة",
          description: "منشورات، قصص، فيديوهات قصيرة، مجموعات مجتمعية، رسائل فورية، مكالمات صوتية ومرئية، فعاليات، مشاركة محتوى، وغير ذلك الكثير. كل ذلك ضمن تجربة مترابطة تتمحور حول المجتمع والتواصل الإنساني."
        },
        {
          title: "ساهم في صناعة مستقبل أفضل لوسائل التواصل الاجتماعي",
          description: "يجب أن تجمع وسائل التواصل الاجتماعي الناس، لا أن تفرقهم. يعمل Kawn على بناء منظومة رقمية أكثر صحة وإنسانية، قائمة على المجتمعات، والمحادثات الهادفة، وحرية التعبير، وأمان العائلات، والتواصل الإيجابي بين البشر. إذا كنت تؤمن بأن مستقبل وسائل التواصل الاجتماعي يمكن أن يكون أفضل، فساعدنا على النمو من خلال مشاركة Kawn مع أصدقائك وعائلتك وزملائك ومجتمعاتك. معاً، يمكننا بناء تجربة اجتماعية أكثر إنسانية للجميع."
        }
      ]
    }
  },
};
