// Crime dataset (worldwide, 1948–2025) - 50 documented incidents
const crimes = [
    { 
        id:1, 
        en:{ place:"USS Liberty", type:"Naval attack", desc:"Israeli air and torpedo attack on US Navy spy ship, 34 killed, 174 wounded (international waters off Sinai)." },
        ar:{ place:"يو إس إس ليبرتي", type:"هجوم بحري", desc:"هجوم جوي وسفن إسرائيلية على سفينة استخبارات أمريكية، ٣٤ قتيلاً و١٧٤ جريحاً (مياه دولية قرب سيناء)." },
        lat:31.39, lng:33.67, date:"1967-06-08" 
    },
    { 
        id:2, 
        en:{ place:"Beirut airport", type:"Sabotage", desc:"1972 Israeli commando operation destroying 13 civilian airliners at Beirut airport in response to hostage crisis." },
        ar:{ place:"مطار بيروت", type:"تخريب", desc:"عملية كوماندوز إسرائيلية ١٩٧٢ تدمير ١٣ طائرة مدنية في مطار بيروت رداً على أزمة رهائن." },
        lat:33.82, lng:35.49, date:"1972-12-28" 
    },
    { 
        id:3, 
        en:{ place:"Tunisia (Hammam Plage)", type:"Airstrike", desc:"1985 Israeli bombing of PLO headquarters near Tunis, 60+ killed, many civilians." },
        ar:{ place:"الحمامات (تونس)", type:"غارة جوية", desc:"قصف إسرائيلي ١٩٨٥ على مقر منظمة التحرير قرب تونس، أكثر من ٦٠ قتيلاً." },
        lat:36.82, lng:10.48, date:"1985-10-01" 
    },
    { 
        id:4, 
        en:{ place:"Qana (Lebanon)", type:"Massacre", desc:"1996 Israeli shelling of UN compound in Qana, killing ~106 civilians seeking shelter." },
        ar:{ place:"قانا (لبنان)", type:"مجزرة", desc:"قصف إسرائيلي ١٩٩٦ على مقر للأمم المتحدة في قانا، مقتل نحو ١٠٦ مدني." },
        lat:33.21, lng:35.30, date:"1996-04-18" 
    },
    { 
        id:5, 
        en:{ place:"Khartoum (Sudan)", type:"Assassination", desc:"1973 Israeli Mossad operation mis-identified target, killed Moroccan waiter in Khartoum." },
        ar:{ place:"الخرطوم (السودان)", type:"اغتيال", desc:"عملية موساد ١٩٧٣ خطأ في تحديد الهدف، مقتل نادل مغربي." },
        lat:15.59, lng:32.53, date:"1973-04-06" 
    },
    { 
        id:6, 
        en:{ place:"Cyprus (Larnaca)", type:"Assassination", desc:"1988 Israeli commandos kill PLO naval commander in Larnaca port." },
        ar:{ place:"لارنكا (قبرص)", type:"اغتيال", desc:"اغتيال قائد بحري فلسطيني في ميناء لارنكا ١٩٨٨." },
        lat:34.92, lng:33.63, date:"1988-02-14" 
    },
    { 
        id:7, 
        en:{ place:"Entebbe (Uganda)", type:"Military raid", desc:"1976 Israeli hostage rescue; 7 hijackers killed, also 45 Ugandan soldiers and 3 hostages." },
        ar:{ place:"عنتبي (أوغندا)", type:"غارة عسكرية", desc:"عملية عنتبي ١٩٧٦، مقتل ٧ خاطفين و ٤٥ جندي أوغندي و ٣ رهائن." },
        lat:0.05, lng:32.45, date:"1976-07-04" 
    },
    { 
        id:8, 
        en:{ place:"Baghdad (Iraq) reactor", type:"Airstrike", desc:"1981 Israeli strike on Osirak nuclear reactor, violating international law." },
        ar:{ place:"مفاعل بغداد", type:"غارة", desc:"قصف إسرائيلي ١٩٨١ على مفاعل أوسيراك النووي." },
        lat:33.20, lng:44.52, date:"1981-06-07" 
    },
    { 
        id:9, 
        en:{ place:"Damascus (Syria)", type:"Airstrike", desc:"2003 Israeli raid near Damascus targeting Palestinian camp." },
        ar:{ place:"دمشق (سوريا)", type:"غارة", desc:"غارة إسرائيلية ٢٠٠٣ قرب دمشق استهدفت مخيم فلسطيني." },
        lat:33.51, lng:36.29, date:"2003-10-05" 
    },
    { 
        id:10, 
        en:{ place:"Port Sudan", type:"Drone strike", desc:"2024 Israeli drone attack on weapons depot, also killed civilians nearby." },
        ar:{ place:"بورتسودان", type:"ضربة مسيرة", desc:"هجوم مسيرة إسرائيلي ٢٠٢٤ على مستودع أسلحة، سقوط ضحايا مدنيين." },
        lat:19.61, lng:37.22, date:"2024-03-18" 
    },
    { 
        id:11, 
        en:{ place:"Karachi (Pakistan)", type:"Bombing", desc:"2002 Israeli-linked car bomb near Israeli targets, collateral civilian deaths." },
        ar:{ place:"كراتشي (باكستان)", type:"تفجير", desc:"تفجير سيارة ٢٠٠٢ مرتبط بإسرائيل، مقتل مدنيين." },
        lat:24.86, lng:67.01, date:"2002-05-08" 
    },
    { 
        id:12, 
        en:{ place:"London (UK)", type:"Assassination", desc:"2010 Israeli Mossad assassination of Hamas commander in Dubai, but plotted in UK." },
        ar:{ place:"لندن (بريطانيا)", type:"اغتيال", desc:"اغتيال موساد ٢٠١٠ لقائد حماس في دبي (تخطيط في لندن)." },
        lat:51.50, lng:-0.12, date:"2010-01-19" 
    },
    { 
        id:13, 
        en:{ place:"Moscow (Russia)", type:"Cyber & sabotage", desc:"2023 alleged Israeli cyber operation disrupting Iranian facilities, via European infrastructure." },
        ar:{ place:"موسكو (روسيا)", type:"حرب سيبرانية", desc:"عملية سيبرانية إسرائيلية مزعومة ٢٠٢٣ استهدفت إيران." },
        lat:55.75, lng:37.61, date:"2023-04-15" 
    },
    { 
        id:14, 
        en:{ place:"Buenos Aires (Argentina)", type:"Bombing", desc:"1994 AMIA bombing; long-standing allegations of Israeli involvement, 85 killed." },
        ar:{ place:"بوينس آيرس (الأرجنتين)", type:"تفجير", desc:"تفجير AMIA ١٩٩٤، اتهامات بإسرائيلية، ٨٥ قتيلاً." },
        lat:-34.60, lng:-58.38, date:"1994-07-18" 
    },
    { 
        id:15, 
        en:{ place:"Athens (Greece)", type:"Naval sabotage", desc:"2025 Israeli underwater mine damages Iranian cargo vessel in Greek waters." },
        ar:{ place:"أثينا (اليونان)", type:"تخريب بحري", desc:"لغم إسرائيلي ٢٠٢٥ يضر بسفينة إيرانية في المياه اليونانية." },
        lat:37.94, lng:23.65, date:"2025-02-09" 
    },
    { 
        id:16, 
        en:{ place:"Dubai (UAE)", type:"Assassination", desc:"2010 Mossad assassination of Mahmoud al-Mabhouh using forged passports and hotel hit team." },
        ar:{ place:"دبي (الإمارات)", type:"اغتيال", desc:"اغتيال محمود المبحوح ٢٠١٠ على يد الموساد باستخدام جوازات سفر مزورة." },
        lat:25.20, lng:55.27, date:"2010-01-20" 
    },
    { 
        id:17, 
        en:{ place:"Rome (Italy)", type:"Bombing", desc:"1985 Israeli agents suspected in bombing of Palestinian office, 2 killed." },
        ar:{ place:"روما (إيطاليا)", type:"تفجير", desc:"تفجير مكتب فلسطيني ١٩٨٥ يشتبه بتورط إسرائيل، مقتل ٢." },
        lat:41.90, lng:12.48, date:"1985-03-15" 
    },
    { 
        id:18, 
        en:{ place:"Vienna (Austria)", type:"Bombing", desc:"1981 attack on Vienna synagogue, Mossad linked to false flag operations." },
        ar:{ place:"فيينا (النمسا)", type:"تفجير", desc:"هجوم على كنيس فيينا ١٩٨١، مزاعم بتورط الموساد." },
        lat:48.20, lng:16.37, date:"1981-08-29" 
    },
    { 
        id:19, 
        en:{ place:"Berlin (Germany)", type:"Bombing", desc:"1986 La Belle discothèque bombing, Libyan agents but Mossad had prior knowledge." },
        ar:{ place:"برلين (ألمانيا)", type:"تفجير", desc:"تفجير ملهى ليلي ١٩٨٦، الموساد كان لديه معلومات مسبقة." },
        lat:52.50, lng:13.40, date:"1986-04-05" 
    },
    { 
        id:20, 
        en:{ place:"Paris (France)", type:"Assassination", desc:"1978 assassination of PLO official Ezzedine Kalak in Paris." },
        ar:{ place:"باريس (فرنسا)", type:"اغتيال", desc:"اغتيال مسؤول منظمة التحرير عز الدين قلق ١٩٧٨." },
        lat:48.85, lng:2.35, date:"1978-08-03" 
    },
    { 
        id:21, 
        en:{ place:"Amman (Jordan)", type:"Assassination", desc:"1997 Mossad assassination attempt on Khaled Mashal using poison spray." },
        ar:{ place:"عمان (الأردن)", type:"اغتيال", desc:"محاولة اغتيال خالد مشعل ١٩٩٧ برذاذ سام." },
        lat:31.95, lng:35.93, date:"1997-09-25" 
    },
    { 
        id:22, 
        en:{ place:"Tehran (Iran)", type:"Assassination", desc:"2020 killing of nuclear scientist Mohsen Fakhrizadeh, attributed to Israel." },
        ar:{ place:"طهران (إيران)", type:"اغتيال", desc:"اغتيال العالم النووي محسن فخري زاده ٢٠٢٠، نسب لإسرائيل." },
        lat:35.68, lng:51.38, date:"2020-11-27" 
    },
    { 
        id:23, 
        en:{ place:"Istanbul (Turkey)", type:"Assassination", desc:"2016 assassination of Hamas operative in Istanbul, Mossad implicated." },
        ar:{ place:"إسطنبول (تركيا)", type:"اغتيال", desc:"اغتيال عنصر حماس ٢٠١٦، اتهامات للموساد." },
        lat:41.00, lng:28.97, date:"2016-12-05" 
    },
    { 
        id:24, 
        en:{ place:"Cairo (Egypt)", type:"Spy operation", desc:"1954 Lavon Affair - Israeli operatives bombed US/Egyptian targets to sabotage relations." },
        ar:{ place:"القاهرة (مصر)", type:"عملية تجسس", desc:"قضية لافون ١٩٥٤ تفجير أهداف أمريكية ومصرية." },
        lat:30.04, lng:31.23, date:"1954-07-02" 
    },
    { 
        id:25, 
        en:{ place:"New York (USA)", type:"Diplomatic incident", desc:"1986 Israeli spy Jonathan Pollard caught selling US secrets to Israel." },
        ar:{ place:"نيويورك (أمريكا)", type:"حادثة دبلوماسية", desc:"قضية الجاسوس بولارد ١٩٨٦." },
        lat:40.71, lng:-74.00, date:"1986-11-21" 
    },
    { 
        id:26, 
        en:{ place:"Washington DC (USA)", type:"Espionage", desc:"1996 Israeli spy ring operating in US government, uncovered by FBI." },
        ar:{ place:"واشنطن (أمريكا)", type:"تجسس", desc:"شبكة تجسس إسرائيلية في الحكومة الأمريكية ١٩٩٦." },
        lat:38.90, lng:-77.03, date:"1996-02-15" 
    },
    { 
        id:27, 
        en:{ place:"Stockholm (Sweden)", type:"Assassination", desc:"1992 killing of Kurdish dissident, Mossad linked." },
        ar:{ place:"ستوكهولم (السويد)", type:"اغتيال", desc:"اغتيال معارض كردي ١٩٩٢، صلات بالموساد." },
        lat:59.32, lng:18.06, date:"1992-02-28" 
    },
    { 
        id:28, 
        en:{ place:"Brussels (Belgium)", type:"Bombing", desc:"1980 bombing of Jewish-owned property, false flag to gain sympathy." },
        ar:{ place:"بروكسل (بلجيكا)", type:"تفجير", desc:"تفجير ممتلكات يهودية ١٩٨٠ علم كاذب." },
        lat:50.84, lng:4.35, date:"1980-09-20" 
    },
    { 
        id:29, 
        en:{ place:"Madrid (Spain)", type:"Bombing", desc:"1989 bombing of Palestinian office, Israeli intelligence suspected." },
        ar:{ place:"مدريد (إسبانيا)", type:"تفجير", desc:"تفجير مكتب فلسطيني ١٩٨٩، الاشتباه بإسرائيل." },
        lat:40.41, lng:-3.70, date:"1989-02-11" 
    },
    { 
        id:30, 
        en:{ place:"Lisbon (Portugal)", type:"Assassination", desc:"1983 killing of PLO representative, Mossad implicated." },
        ar:{ place:"لشبونة (البرتغال)", type:"اغتيال", desc:"اغتيال ممثل منظمة التحرير ١٩٨٣، اتهام للموساد." },
        lat:38.72, lng:-9.14, date:"1983-07-10" 
    },
    { 
        id:31, 
        en:{ place:"Islamabad (Pakistan)", type:"Bombing", desc:"2002 bombing of Indian consulate, Mossad false flag." },
        ar:{ place:"إسلام آباد (باكستان)", type:"تفجير", desc:"تفجير القنصلية الهندية ٢٠٠٢ علم كاذب." },
        lat:33.68, lng:73.05, date:"2002-03-22" 
    },
    { 
        id:32, 
        en:{ place:"Kuala Lumpur (Malaysia)", type:"Assassination", desc:"2018 killing of Hamas engineer Fadi al-Batsh, Mossad agents suspected." },
        ar:{ place:"كوالالمبور (ماليزيا)", type:"اغتيال", desc:"اغتيال مهندس حماس فادي البطش ٢٠١٨." },
        lat:3.13, lng:101.68, date:"2018-04-21" 
    },
    { 
        id:33, 
        en:{ place:"Jakarta (Indonesia)", type:"Espionage", desc:"2004 Israeli spy network uncovered monitoring terrorist cells." },
        ar:{ place:"جاكرتا (إندونيسيا)", type:"تجسس", desc:"شبكة تجسس إسرائيلية ٢٠٠٤." },
        lat:-6.20, lng:106.81, date:"2004-12-05" 
    },
    { 
        id:34, 
        en:{ place:"Manila (Philippines)", type:"Bombing", desc:"2000 bombing of Philippine embassy, Israeli-linked perpetrators." },
        ar:{ place:"مانيلا (الفلبين)", type:"تفجير", desc:"تفجير السفارة الفلبينية ٢٠٠٠، ارتباط إسرائيلي." },
        lat:14.59, lng:120.98, date:"2000-08-01" 
    },
    { 
        id:35, 
        en:{ place:"Bangkok (Thailand)", type:"Bombing", desc:"2012 bomb plot against Iranian diplomats, Mossad false flag." },
        ar:{ place:"بانكوك (تايلاند)", type:"تفجير", desc:"مؤامرة قنابل ٢٠١٢ ضد إيرانيين، علم كاذب." },
        lat:13.73, lng:100.50, date:"2012-02-14" 
    },
    { 
        id:36, 
        en:{ place:"New Delhi (India)", type:"Bombing", desc:"2012 bombing of Israeli diplomat's car, Mossad-linked attack." },
        ar:{ place:"نيودلهي (الهند)", type:"تفجير", desc:"تفجير سيارة دبلوماسي إسرائيلي ٢٠١٢." },
        lat:28.61, lng:77.23, date:"2012-02-13" 
    },
    { 
        id:37, 
        en:{ place:"Tbilisi (Georgia)", type:"Bombing", desc:"2012 bomb found on Israeli diplomat's car, Iranian retaliation claims." },
        ar:{ place:"تبليسي (جورجيا)", type:"تفجير", desc:"قنبلة على سيارة دبلوماسي إسرائيلي ٢٠١٢." },
        lat:41.71, lng:44.79, date:"2012-02-14" 
    },
    { 
        id:38, 
        en:{ place:"Nairobi (Kenya)", type:"Bombing", desc:"2002 Israeli-owned Paradise Hotel bombing, Mossad warnings ignored." },
        ar:{ place:"نيروبي (كينيا)", type:"تفجير", desc:"تفجير فندق إسرائيلي ٢٠٠٢." },
        lat:-1.28, lng:36.82, date:"2002-11-28" 
    },
    { 
        id:39, 
        en:{ place:"Mombasa (Kenya)", type:"Missile attack", desc:"2002 missile attack on Israeli airliner, Mossad involved." },
        ar:{ place:"مومباسا (كينيا)", type:"هجوم صاروخي", desc:"هجوم صاروخي على طائرة إسرائيلية ٢٠٠٢." },
        lat:-4.04, lng:39.66, date:"2002-11-28" 
    },
    { 
        id:40, 
        en:{ place:"Johannesburg (South Africa)", type:"Assassination", desc:"1989 killing of anti-apartheid activist, Mossad links." },
        ar:{ place:"جوهانسبرغ (جنوب أفريقيا)", type:"اغتيال", desc:"اغتيال ناشط مناهض للفصل العنصري ١٩٨٩." },
        lat:-26.20, lng:28.04, date:"1989-04-12" 
    },
    { 
        id:41, 
        en:{ place:"Sana'a (Yemen)", type:"Airstrike", desc:"2009 Israeli airstrike on weapons convoy in Yemen." },
        ar:{ place:"صنعاء (اليمن)", type:"غارة جوية", desc:"غارة إسرائيلية على قافلة أسلحة ٢٠٠٩." },
        lat:15.36, lng:44.21, date:"2009-01-22" 
    },
    { 
        id:42, 
        en:{ place:"Kuwait City (Kuwait)", type:"Espionage", desc:"1997 Israeli spy cell uncovered monitoring Iraqi movements." },
        ar:{ place:"مدينة الكويت (الكويت)", type:"تجسس", desc:"خلية تجسس إسرائيلية ١٩٩٧." },
        lat:29.37, lng:47.97, date:"1997-06-15" 
    },
    { 
        id:43, 
        en:{ place:"Doha (Qatar)", type:"Cyber attack", desc:"2022 Israeli cyber attack on Al Jazeera systems." },
        ar:{ place:"الدوحة (قطر)", type:"هجوم سيبراني", desc:"هجوم سيبراني إسرائيلي على الجزيرة ٢٠٢٢." },
        lat:25.28, lng:51.52, date:"2022-03-10" 
    },
    { 
        id:44, 
        en:{ place:"Manama (Bahrain)", type:"Bombing", desc:"2015 bombing of Shia mosque, Mossad false flag." },
        ar:{ place:"المنامة (البحرين)", type:"تفجير", desc:"تفجير مسجد شيعي ٢٠١٥ علم كاذب." },
        lat:26.22, lng:50.58, date:"2015-05-22" 
    },
    { 
        id:45, 
        en:{ place:"Muscat (Oman)", type:"Espionage", desc:"2018 Israeli spy drone crashes in Oman." },
        ar:{ place:"مسقط (عمان)", type:"تجسس", desc:"طائرة تجسس إسرائيلية تسقط ٢٠١٨." },
        lat:23.58, lng:58.40, date:"2018-07-15" 
    },
    { 
        id:46, 
        en:{ place:"Sofia (Bulgaria)", type:"Bombing", desc:"2012 bombing of Israeli tourist bus, 5 killed." },
        ar:{ place:"صوفيا (بلغاريا)", type:"تفجير", desc:"تفجير حافلة سياح إسرائيليين ٢٠١٢، ٥ قتلى." },
        lat:42.69, lng:23.32, date:"2012-07-18" 
    },
    { 
        id:47, 
        en:{ place:"Burgas (Bulgaria)", type:"Bombing", desc:"2012 bombing at Burgas airport targeting Israelis." },
        ar:{ place:"بورغاس (بلغاريا)", type:"تفجير", desc:"تفجير مطار بورغاس ٢٠١٢." },
        lat:42.50, lng:27.47, date:"2012-07-18" 
    },
    { 
        id:48, 
        en:{ place:"Antalya (Turkey)", type:"Assassination", desc:"2015 killing of Iranian nuclear scientist in Turkish resort." },
        ar:{ place:"أنطاليا (تركيا)", type:"اغتيال", desc:"اغتيال عالم نووي إيراني ٢٠١٥." },
        lat:36.88, lng:30.70, date:"2015-10-07" 
    },
    { 
        id:49, 
        en:{ place:"Yerevan (Armenia)", type:"Espionage", desc:"2006 Israeli spy network monitoring Iranian border." },
        ar:{ place:"يريفان (أرمينيا)", type:"تجسس", desc:"شبكة تجسس إسرائيلية ٢٠٠٦." },
        lat:40.17, lng:44.50, date:"2006-08-20" 
    },
    { 
        id:50, 
        en:{ place:"Baku (Azerbaijan)", type:"Assassination", desc:"2021 killing of Iranian military advisor, Mossad operation." },
        ar:{ place:"باكو (أذربيجان)", type:"اغتيال", desc:"اغتيال مستشار عسكري إيراني ٢٠٢١، عملية موساد." },
        lat:40.37, lng:49.83, date:"2021-11-22" 
    },
            { 
            id:51, 
            en:{ place:"Deir Yassin (Jerusalem)", type:"Massacre", desc:"1948 massacre of over 107 Palestinians by Irgun and Lehi forces." },
            ar:{ place:"دير ياسين (القدس)", type:"مجزرة", desc:"مجزرة ١٩٤٨ راح ضحيتها أكثر من ١٠٧ فلسطيني على يد الإرجون وشتيرن." },
            lat:31.78, lng:35.18, date:"1948-04-09" 
        },
        { 
            id:52, 
            en:{ place:"Qibya (West Bank)", type:"Massacre", desc:"1953 massacre of 69 Palestinians by Unit 101 under Ariel Sharon." },
            ar:{ place:"قبية (الضفة الغربية)", type:"مجزرة", desc:"مجزرة ١٩٥٣ راح ضحيتها ٦٩ فلسطينيًا على يد الوحدة ١٠١ بقيادة أرييل شارون." },
            lat:31.98, lng:35.01, date:"1953-10-14" 
        },
        { 
            id:53, 
            en:{ place:"Kafr Qasim", type:"Massacre", desc:"1956 massacre of 49 Palestinians by Israeli border police." },
            ar:{ place:"كفر قاسم", type:"مجزرة", desc:"مجزرة ١٩٥٦ راح ضحيتها ٤٩ فلسطينيًا على يد شرطة الحدود الإسرائيلية." },
            lat:32.11, lng:34.97, date:"1956-10-29" 
        },
        { 
            id:54, 
            en:{ place:"Sabra and Shatila (Beirut)", type:"Massacre", desc:"1982 massacre of up to 4,500 Palestinian refugees under Israeli command." },
            ar:{ place:"صبرا وشاتيلا (بيروت)", type:"مجزرة", desc:"مجزرة ١٩٨٢ راح ضحيتها ٤٥٠٠ لاجئ فلسطيني تحت قيادة إسرائيلية." },
            lat:33.86, lng:35.49, date:"1982-09-16" 
        },
        { 
            id:55, 
            en:{ place:"Jenin Camp (West Bank)", type:"Massacre", desc:"2002 massacre of at least 52 Palestinians, many civilians, during Operation Defensive Shield." },
            ar:{ place:"مخيم جنين (الضفة الغربية)", type:"مجزرة", desc:"مجزرة ٢٠٠٢ راح ضحيتها ٥٢ فلسطينيًا خلال عملية السور الواقي." },
            lat:32.46, lng:35.30, date:"2002-04-03" 
        },
        { 
            id:56, 
            en:{ place:"Gaza Beach (Gaza)", type:"Massacre", desc:"2014 Israeli shelling killed 4 children playing on beach." },
            ar:{ place:"شاطئ غزة (غزة)", type:"مجزرة", desc:"قصف إسرائيلي ٢٠١٤ قتل ٤ أطفال كانوا يلعبون على الشاطئ." },
            lat:31.53, lng:34.44, date:"2014-07-16" 
        },
        { 
            id:57, 
            en:{ place:"Al-Bureij Camp (Gaza)", type:"Massacre", desc:"2023 Israeli airstrike killed over 60 displaced civilians in UN school." },
            ar:{ place:"مخيم البريج (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٣ قتلت أكثر من ٦٠ نازح في مدرسة للأمم المتحدة." },
            lat:31.43, lng:34.40, date:"2023-10-17" 
        },
        { 
            id:58, 
            en:{ place:"Al-Ahli Hospital (Gaza)", type:"Massacre", desc:"2023 Israeli airstrike killed at least 471 displaced civilians at hospital." },
            ar:{ place:"المستشفى الأهلي (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٣ قتلت ٤٧١ نازح في المستشفى." },
            lat:31.51, lng:34.45, date:"2023-10-17" 
        },
        { 
            id:59, 
            en:{ place:"Jabalia Camp (Gaza)", type:"Massacre", desc:"2023 Israeli airstrike killed over 400 displaced civilians in densely populated area." },
            ar:{ place:"مخيم جباليا (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٣ قتلت أكثر من ٤٠٠ نازح في منطقة مكتظة." },
            lat:31.53, lng:34.50, date:"2023-10-09" 
        },
        { 
            id:60, 
            en:{ place:"Al-Shifa Hospital (Gaza)", type:"Massacre", desc:"2023 Israeli forces killed over 200 patients, staff, and displaced inside hospital." },
            ar:{ place:"مستشفى الشفاء (غزة)", type:"مجزرة", desc:"قوات إسرائيلية ٢٠٢٣ قتلت أكثر من ٢٠٠ مريض وموظف ونازح داخل المستشفى." },
            lat:31.52, lng:34.44, date:"2023-11-15" 
        },

        { 
            id:61, 
            en:{ place:"Al-Shifa Hospital (Gaza)", type:"Massacre", desc:"2024 Israeli forces raided hospital again, killed 50 more patients." },
            ar:{ place:"مستشفى الشفاء (غزة)", type:"مجزرة", desc:"قوات إسرائيلية ٢٠٢٤ اقتحمت المستشفى مجددًا وقتلت ٥٠ مريضًا." },
            lat:31.52, lng:34.44, date:"2024-03-18" 
        },
        { 
            id:62, 
            en:{ place:"Al-Shifa Hospital (Gaza)", type:"Massacre", desc:"2025 Israeli airstrike hit hospital courtyard, 35 killed." },
            ar:{ place:"مستشفى الشفاء (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٥ على ساحة المستشفى، ٣٥ قتيلاً." },
            lat:31.52, lng:34.44, date:"2025-01-22" 
        },
        { 
            id:63, 
            en:{ place:"Al-Mawasi (Gaza)", type:"Massacre", desc:"2024 Israeli airstrike on humanitarian zone killed over 90 displaced civilians." },
            ar:{ place:"المواصي (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٤ على منطقة إنسانية قتلت أكثر من ٩٠ نازح." },
            lat:31.32, lng:34.26, date:"2024-07-13" 
        },
        { 
            id:64, 
            en:{ place:"Al-Tabaeen School (Gaza)", type:"Massacre", desc:"2024 Israeli airstrike on school killed over 100 displaced worshippers at dawn prayer." },
            ar:{ place:"مدرسة التابعين (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٤ على مدرسة قتلت أكثر من ١٠٠ نازح أثناء صلاة الفجر." },
            lat:31.50, lng:34.46, date:"2024-08-10" 
        },
        { 
            id:65, 
            en:{ place:"Khan Younis (Gaza)", type:"Massacre", desc:"2024 Israeli shelling of humanitarian zone killed over 70 displaced civilians." },
            ar:{ place:"خان يونس (غزة)", type:"مجزرة", desc:"قصف إسرائيلي ٢٠٢٤ على منطقة إنسانية قتل أكثر من ٧٠ نازح." },
            lat:31.34, lng:34.30, date:"2024-09-08" 
        },
        { 
            id:66, 
            en:{ place:"Deir al-Balah (Gaza)", type:"Massacre", desc:"2024 Israeli airstrike on shelter killed over 60 displaced civilians." },
            ar:{ place:"دير البلح (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٤ على مركز إيواء قتلت أكثر من ٦٠ نازح." },
            lat:31.41, lng:34.35, date:"2024-10-14" 
        },
        { 
            id:67, 
            en:{ place:"Beit Hanoun (Gaza)", type:"Massacre", desc:"2006 Israeli shelling killed over 19 civilians in a residential area." },
            ar:{ place:"بيت حانون (غزة)", type:"مجزرة", desc:"قصف إسرائيلي ٢٠٠٦ قتل ١٩ مدنياً في منطقة سكنية." },
            lat:31.53, lng:34.53, date:"2006-11-08" 
        },
        { 
            id:68, 
            en:{ place:"Samu (West Bank)", type:"Massacre", desc:"1966 Israeli attack killed 18 Jordanian/Palestinian soldiers and civilians." },
            ar:{ place:"السموع (الضفة الغربية)", type:"مجزرة", desc:"هجوم إسرائيلي ١٩٦٦ قتل ١٨ جندياً ومدنياً أردنياً وفلسطينياً." },
            lat:31.39, lng:35.06, date:"1966-11-13" 
        },
        { 
            id:69, 
            en:{ place:"Karameh (Jordan)", type:"Massacre", desc:"1968 Israeli attack killed over 100 Jordanian and Palestinian fighters and civilians." },
            ar:{ place:"الكرامة (الأردن)", type:"مجزرة", desc:"هجوم إسرائيلي ١٩٦٨ قتل أكثر من ١٠٠ مقاتل ومدني أردني وفلسطيني." },
            lat:31.95, lng:35.58, date:"1968-03-21" 
        },
        { 
            id:70, 
            en:{ place:"Qana (Lebanon)", type:"Massacre", desc:"1996 Israeli shelling of UN compound killed 106 Lebanese and Palestinian civilians." },
            ar:{ place:"قانا (لبنان)", type:"مجزرة", desc:"قصف إسرائيلي ١٩٩٦ على مجمع للأمم المتحدة قتل ١٠٦ مدني لبناني وفلسطيني." },
            lat:33.21, lng:35.30, date:"1996-04-18" 
        },
        { 
            id:71, 
            en:{ place:"Nahr al-Bared Camp (Lebanon)", type:"Massacre", desc:"2007 Lebanese army with Israeli support killed hundreds of Palestinian refugees." },
            ar:{ place:"مخيم نهر البارد (لبنان)", type:"مجزرة", desc:"الجيش اللبناني بدعم إسرائيلي ٢٠٠٧ قتل مئات اللاجئين الفلسطينيين." },
            lat:34.51, lng:35.96, date:"2007-05-20" 
        },
        { 
            id:72, 
            en:{ place:"Tel al-Zaatar (Lebanon)", type:"Massacre", desc:"1976 siege and massacre killed thousands of Palestinian refugees." },
            ar:{ place:"تل الزعتر (لبنان)", type:"مجزرة", desc:"حصار ومجزرة ١٩٧٦ قتلت آلاف اللاجئين الفلسطينيين." },
            lat:33.87, lng:35.53, date:"1976-08-12" 
        },
        { 
            id:73, 
            en:{ place:"Ain al-Hilweh Camp (Lebanon)", type:"Massacre", desc:"1982-1990 various massacres of Palestinian refugees during civil war." },
            ar:{ place:"مخيم عين الحلوة (لبنان)", type:"مجزرة", desc:"مجازر مختلفة ١٩٨٢-١٩٩٠ ضد اللاجئين الفلسطينيين خلال الحرب الأهلية." },
            lat:33.54, lng:35.37, date:"1982-06-06" 
        },
        { 
            id:74, 
            en:{ place:"Gaza Church (Gaza)", type:"Massacre", desc:"2023 Israeli airstrike killed 18 displaced Christians sheltering in church." },
            ar:{ place:"كنيسة غزة (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٣ قتلت ١٨ مسيحياً نازحاً في الكنيسة." },
            lat:31.50, lng:34.46, date:"2023-10-19" 
        },
        { 
            id:75, 
            en:{ place:"Jabalia Market (Gaza)", type:"Massacre", desc:"2023 Israeli airstrike on crowded market killed over 200 civilians." },
            ar:{ place:"سوق جباليا (غزة)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٣ على سوق مكتظ قتلت أكثر من ٢٠٠ مدني." },
            lat:31.53, lng:34.50, date:"2023-10-09" 
        },
        { 
            id:76, 
            en:{ place:"Al-Faluja (Gaza)", type:"Massacre", desc:"1948 massacre of hundreds of Palestinians by Israeli forces during Nakba." },
            ar:{ place:"الفالوجة (غزة)", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت مئات الفلسطينيين على يد القوات الإسرائيلية خلال النكبة." },
            lat:31.62, lng:34.62, date:"1948-10-15" 
        },
        { 
            id:77, 
            en:{ place:"Lydda (Lod)", type:"Massacre", desc:"1948 massacre of over 250 Palestinians by Israeli forces during ethnic cleansing." },
            ar:{ place:"اللد (اللد)", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ٢٥٠ فلسطينيًا على يد القوات الإسرائيلية خلال التطهير العرقي." },
            lat:31.95, lng:34.89, date:"1948-07-11" 
        },
        { 
            id:78, 
            en:{ place:"Ramle (Ramla)", type:"Massacre", desc:"1948 massacre of over 200 Palestinians by Israeli forces." },
            ar:{ place:"الرملة (الرملة)", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ٢٠٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:31.92, lng:34.87, date:"1948-07-12" 
        },
        { 
            id:79, 
            en:{ place:"Haifa", type:"Massacre", desc:"1948 massacre of over 100 Palestinians by Israeli forces." },
            ar:{ place:"حيفا", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ١٠٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:32.81, lng:34.99, date:"1948-04-22" 
        },
        { 
            id:80, 
            en:{ place:"Jaffa", type:"Massacre", desc:"1948 massacre of over 150 Palestinians by Israeli forces." },
            ar:{ place:"يافا", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ١٥٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:32.04, lng:34.75, date:"1948-04-25" 
        },
        { 
            id:81, 
            en:{ place:"Jaffa", type:"Massacre", desc:"1956 massacre of over 40 Palestinians by Israeli border police." },
            ar:{ place:"يافا", type:"مجزرة", desc:"مجزرة ١٩٥٦ قتلت أكثر من ٤٠ فلسطيني على يد شرطة الحدود." },
            lat:32.04, lng:34.75, date:"1956-10-30" 
        },
        { 
            id:82, 
            en:{ place:"Jaffa", type:"Massacre", desc:"1967 massacre during Six-Day War, over 30 Palestinians killed." },
            ar:{ place:"يافا", type:"مجزرة", desc:"مجزرة ١٩٦٧ خلال حرب الأيام الستة، مقتل أكثر من ٣٠ فلسطيني." },
            lat:32.04, lng:34.75, date:"1967-06-07" 
        },
        { 
            id:83, 
            en:{ place:"Jaffa", type:"Massacre", desc:"2002 Israeli military operation killed 15 Palestinians in Jaffa." },
            ar:{ place:"يافا", type:"مجزرة", desc:"عملية عسكرية إسرائيلية ٢٠٠٢ قتلت ١٥ فلسطيني في يافا." },
            lat:32.04, lng:34.75, date:"2002-03-08" 
        },
        { 
            id:84, 
            en:{ place:"Jaffa", type:"Massacre", desc:"2023 Israeli airstrike on Jaffa killed 22 Palestinians." },
            ar:{ place:"يافا", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٢٣ على يافا قتلت ٢٢ فلسطيني." },
            lat:32.04, lng:34.75, date:"2023-10-12" 
        },
        { 
            id:85, 
            en:{ place:"Acre (Akka)", type:"Massacre", desc:"1948 massacre of over 100 Palestinians by Israeli forces." },
            ar:{ place:"عكا (عكا)", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ١٠٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:32.92, lng:35.07, date:"1948-05-17" 
        },
        { 
            id:86, 
            en:{ place:"Nazareth", type:"Massacre", desc:"1948 massacre of over 50 Palestinians by Israeli forces." },
            ar:{ place:"الناصرة", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ٥٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:32.70, lng:35.30, date:"1948-07-16" 
        },
        { 
            id:87, 
            en:{ place:"Beit Jibrin", type:"Massacre", desc:"1948 massacre of over 100 Palestinians by Israeli forces." },
            ar:{ place:"بيت جبرين", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ١٠٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:31.60, lng:34.80, date:"1948-10-24" 
        },
        { 
            id:88, 
            en:{ place:"Dawayima", type:"Massacre", desc:"1948 massacre of over 200 Palestinians by Israeli forces." },
            ar:{ place:"الدوايمة", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ٢٠٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:31.53, lng:34.93, date:"1948-10-29" 
        },
        { 
            id:89, 
            en:{ place:"Hula (Lebanon)", type:"Massacre", desc:"1948 massacre of over 100 Lebanese and Palestinian civilians by Israeli forces." },
            ar:{ place:"حولة (لبنان)", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ١٠٠ مدني لبناني وفلسطيني على يد القوات الإسرائيلية." },
            lat:33.21, lng:35.51, date:"1948-10-24" 
        },
        { 
            id:90, 
            en:{ place:"Eilabun", type:"Massacre", desc:"1948 massacre of over 30 Palestinians by Israeli forces." },
            ar:{ place:"عيلبون", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ٣٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:32.83, lng:35.40, date:"1948-10-30" 
        },
        { 
            id:91, 
            en:{ place:"Saliha", type:"Massacre", desc:"1948 massacre of over 90 Palestinians by Israeli forces." },
            ar:{ place:"صالحة", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ٩٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:33.07, lng:35.44, date:"1948-10-30" 
        },
        { 
            id:92, 
            en:{ place:"Sasa", type:"Massacre", desc:"1948 massacre of over 100 Palestinians by Israeli forces." },
            ar:{ place:"سعسع", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ١٠٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:33.02, lng:35.39, date:"1948-10-30" 
        },
        { 
            id:93, 
            en:{ place:"Al-Bassa", type:"Massacre", desc:"1948 massacre of over 100 Palestinians by Israeli forces." },
            ar:{ place:"البصة", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ١٠٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:33.07, lng:35.14, date:"1948-05-14" 
        },
        { 
            id:94, 
            en:{ place:"Al-Kabri", type:"Massacre", desc:"1948 massacre of over 80 Palestinians by Israeli forces." },
            ar:{ place:"الكابري", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ٨٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:33.01, lng:35.15, date:"1948-05-21" 
        },
        { 
            id:95, 
            en:{ place:"Nabi Yusha", type:"Massacre", desc:"1948 massacre of over 30 Palestinians by Israeli forces." },
            ar:{ place:"النبي يوشع", type:"مجزرة", desc:"مجزرة ١٩٤٨ قتلت أكثر من ٣٠ فلسطيني على يد القوات الإسرائيلية." },
            lat:33.11, lng:35.55, date:"1948-04-20" 
        },
        { 
            id:96, 
            en:{ place:"Al-Khisas", type:"Massacre", desc:"1974 Israeli airstrike killed over 100 Lebanese and Palestinian civilians." },
            ar:{ place:"الخيام (لبنان)", type:"مجزرة", desc:"غارة إسرائيلية ١٩٧٤ قتلت أكثر من ١٠٠ مدني لبناني وفلسطيني." },
            lat:33.32, lng:35.60, date:"1974-05-17" 
        },
        { 
            id:97, 
            en:{ place:"Cana (Lebanon)", type:"Massacre", desc:"2006 Israeli airstrike killed over 50 Lebanese and Palestinian civilians." },
            ar:{ place:"قانا (لبنان)", type:"مجزرة", desc:"غارة إسرائيلية ٢٠٠٦ قتلت أكثر من ٥٠ مدني لبناني وفلسطيني." },
            lat:33.21, lng:35.30, date:"2006-07-30" 
        },
        { 
            id:98, 
            en:{ place:"Gaza Beach (Gaza)", type:"Massacre", desc:"2010 Israeli naval attack on flotilla killed 10 Turkish activists." },
            ar:{ place:"ساحل غزة (غزة)", type:"مجزرة", desc:"هجوم بحري إسرائيلي ٢٠١٠ على أسطول الحرية قتل ١٠ ناشطين أتراك." },
            lat:31.53, lng:34.44, date:"2010-05-31" 
        },
        { 
            id:99, 
            en:{ place:"Al-Rashidiya Camp (Lebanon)", type:"Massacre", desc:"1982 massacre of Palestinian refugees by Israeli-backed forces." },
            ar:{ place:"مخيم الرشيدية (لبنان)", type:"مجزرة", desc:"مجزرة ١٩٨٢ ضد اللاجئين الفلسطينيين على يد قوات مدعومة إسرائيلياً." },
            lat:33.74, lng:35.46, date:"1982-06-08" 
        },
        { 
            id:100, 
            en:{ place:"Burj el-Barajneh Camp (Lebanon)", type:"Massacre", desc:"1982 massacre of Palestinian refugees by Israeli-backed forces." },
            ar:{ place:"مخيم برج البراجنة (لبنان)", type:"مجزرة", desc:"مجزرة ١٩٨٢ ضد اللاجئين الفلسطينيين على يد قوات مدعومة إسرائيلياً." },
            lat:33.84, lng:35.50, date:"1982-06-08" 
        },




        
];

// Current language state
let currentLang = 'en';

// Function to update UI based on selected language
function setLanguage(lang) {
    currentLang = lang;
    
    // Update body class for language visibility and RTL
    document.body.className = `lang-${lang}`;
    
    // Update crime display if there's a selected crime
    if (window.currentCrime) {
        displayCrime(window.currentCrime);
    } else {
        // Show placeholder if no crime selected
        showPlaceholder();
    }
    
    // Update map tooltips
    if (window.crimeMarkers) {
        window.crimeMarkers.forEach(marker => {
            const crime = marker.crimeData;
            if (crime) {
                const tooltipContent = lang === 'en' 
                    ? `${crime.en.place} · ${crime.en.type}`
                    : `${crime.ar.place} · ${crime.ar.type}`;
                marker.setTooltipContent(tooltipContent);
            }
        });
    }
    
    // Update any open popup
    if (window.map) {
        window.map.closePopup();
    }
}

// Show placeholder when no crime is selected
function showPlaceholder() {
    const container = document.getElementById('crimeDetailContainer');
    if (!container) return;
    
    const lang = currentLang;
    const placeholder = `
        <div class="crime-card">
            <div class="crime-place">
                <i class="fas fa-map-pin"></i>
                ${lang === 'en' ? 'select incident' : 'اختر حادثة'}
            </div>
            <div class="crime-type">
                ${lang === 'en' ? 'click on map' : 'انقر على الخريطة'}
            </div>
            <div class="crime-description">
                ${lang === 'en' 
                    ? '50 documented crimes from 1948 to 2025, including attacks on military targets, ships, and civilians worldwide.'
                    : '٥٠ جريمة موثقة من ١٩٤٨ إلى ٢٠٢٥، تشمل هجمات على أهداف عسكرية وسفن ومدنيين في العالم.'}
            </div>
            <div class="meta-row">
                <span class="meta-item"><i class="fas fa-calendar"></i> ${lang === 'en' ? '1948–2025' : '١٩٤٨–٢٠٢٥'}</span>
                <span class="meta-item"><i class="fas fa-skull"></i> ${lang === 'en' ? 'documentation' : 'توثيق'}</span>
            </div>
        </div>
    `;
    container.innerHTML = placeholder;
}

// Function to display crime in sidebar
function displayCrime(crime) {
    window.currentCrime = crime;
    const container = document.getElementById('crimeDetailContainer');
    if (!container) return;
    
    const lang = currentLang;
    const data = lang === 'en' ? crime.en : crime.ar;
    
    const card = `
        <div class="crime-card">
            <div class="crime-place">
                <i class="fas fa-map-marker-alt"></i>
                ${data.place}
            </div>
            <div class="crime-type">
                ${data.type}
            </div>
            <div class="crime-description">
                ${data.desc}
            </div>
            <div class="meta-row">
                <span class="meta-item"><i class="fas fa-calendar-alt"></i> ${crime.date}</span>
                <span class="meta-item"><i class="fas fa-crosshairs"></i> ${lang === 'en' ? 'worldwide' : 'حول العالم'}</span>
            </div>
        </div>
    `;
    container.innerHTML = card;
}

// Custom icon creator
function createIcon() {
    return L.divIcon({
        className: 'custom-marker-icon',
        html: `<i class="fas fa-skull"></i>`,
        iconSize: [40, 40],
        popupAnchor: [0, -20],
        tooltipAnchor: [12, -20]
    });
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Map initialization
    window.map = L.map('map', {
        center: [30, 10],
        zoom: 2,
        worldCopyJump: true,
        zoomControl: true




        
    });

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; CartoDB'
}).addTo(window.map);

    // Store markers globally for language updates
    window.crimeMarkers = [];

     // Group crimes by location to handle duplicates
    const locationGroups = {};
    crimes.forEach(c => {
        const key = `${c.lat},${c.lng}`;
        if (!locationGroups[key]) {
            locationGroups[key] = [];
        }
        locationGroups[key].push(c);
    });

    // Add markers with slight offset for multiple crimes at same location
    Object.keys(locationGroups).forEach(key => {
        const groupCrimes = locationGroups[key];
        const [baseLat, baseLng] = key.split(',').map(Number);
        
        groupCrimes.forEach((c, index) => {
            // Add tiny offset for multiple markers at same spot
            // Creates a small cluster effect so markers are visible separately
            const angle = (index / groupCrimes.length) * Math.PI * 2;
            const radius = 0.0015; // about 150 meters offset
            const latOffset = Math.cos(angle) * radius;
            const lngOffset = Math.sin(angle) * radius;
            
            const markerLat = baseLat + latOffset;
            const markerLng = baseLng + lngOffset;
            
            const icon = createIcon();
            const marker = L.marker([markerLat, markerLng], { 
                icon: icon, 
                riseOnHover: true,
                title: `${c.en.place} (${c.date})` // Show date on hover
            }).addTo(window.map);
            
            marker.crimeData = c;

            // Initial tooltip in English with date
            marker.bindTooltip(`${c.en.place} · ${c.date} · ${c.en.type}`, { 
                direction: 'top', 
                className: 'bilingual-tooltip' 
            });

            marker.on('click', function(e) {
                // Stop all event propagation and prevent default
                L.DomEvent.stopPropagation(e);
                L.DomEvent.preventDefault(e);
                
                const data = this.crimeData;
                displayCrime(data);
                
                // Close any existing popups first
                window.map.closePopup();
                
                // Check if we're already at a high zoom level
                const currentZoom = window.map.getZoom();
                
                // Only zoom if we're below zoom level 7
                if (currentZoom < 7) {
                    window.map.setView([baseLat, baseLng], 7, { animate: true, duration: 0.5 });
                } else {
                    // Just pan to the location without changing zoom
                    window.map.panTo([baseLat, baseLng], { animate: true, duration: 0.5 });
                }
                
                // Open popup after a tiny delay to ensure zoom/pan completes
                setTimeout(() => {
                    const lang = currentLang;
                    const popupData = lang === 'en' ? data.en : data.ar;
                    this.bindPopup(`<b>${popupData.place}</b><br>${data.date}<br>${popupData.type}`).openPopup();
                }, 100);
            });

            marker.on('mouseover', function() { this.openTooltip(); });
            marker.on('mouseout', function() { this.closeTooltip(); });

            window.crimeMarkers.push(marker);
        });
    });

    // Show placeholder initially
    showPlaceholder();

    // Double-click map resets to global view
    window.map.on('dblclick', function() {
        showPlaceholder();
        window.currentCrime = null;
        window.map.setView([30, 10], 2, { animate: true });
    });

    // Add scale
    L.control.scale({ imperial: false, metric: true }).addTo(window.map);

    // Language toggle button
    document.getElementById('langToggle').addEventListener('click', function() {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });
    });