import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const TEACHER_IMG = "https://cdn.poehali.dev/projects/f3d73461-4e0d-41f2-8a78-5d25da796f94/bucket/9495de6e-3d8b-4a8c-bd2c-52ba7b6cd01c.jpg";

const courses = [
  {
    id: 1,
    tag: "Йога",
    title: "Спина без боли 100%",
    desc: "7 практик по 30 минут — 7 шагов к свободе вашего позвоночника. Каждый урок посвящен конкретной зоне тела, которая напрямую влияет на здоровье спины. Мы не просто работаем с симптомами — мы устраняем причины дискомфорта через комплексную проработку всего организма.",
    details: "Это не скучная терапия или обычная физкультура. Это полноценная глубокая практика йоги с медитативным погружением в процесс. Вы не только укрепляете мышечный корсет, но и учитесь чувствовать своё тело, расслабляя его на глубоком уровне. Верните своей спине природную силу и легкость в рамках нашего клуба.",
    duration: "7 уроков",
    lessons: 7,
  },
  {
    id: 2,
    tag: "Техника",
    title: "Азы техник: Убийца 90% инструкторов йоги",
    desc: "Всего 6 уроков по 3–7 минут, которые заменят вам месяцы занятий с тренером. В этот курс включены все фундаментальные отстройки базы. Это «золотой стандарт» техники, который обычно растягивают на годы платных занятий.",
    details: "После прохождения курса вы сможете практиковать йогу самостоятельно, будучи на 100% уверены в безопасности и правильности каждого движения. Почему меня ненавидят 90% инструкторов? Потому что этот курс снимает вас с «крючка» зависимости от тренера. Я отдаю вам ключи от системы, которые другие предпочитают держать при себе, чтобы вы возвращались к ним снова и снова. Обретите независимость и личную силу. Станьте мастером своей практики.",
    duration: "6 уроков",
    lessons: 6,
  },
  {
    id: 3,
    tag: "Йога-нидра",
    title: "Практика исполнения желаний и тотальной перезагрузки",
    desc: "Это звучит фантастически, но это работает. Перед вами — глубочайшая психотехника, которая научно обоснованно избавляет от лени и перепрошивает подсознание на достижение целей.",
    details: "Меня часто называют «исполнителем желаний» после моих нидр. Но правда в том, что желания исполняю не я, а сама практика, если она передана правильно. Мой личный опыт и результаты сотен учеников подтверждают: это самый быстрый способ убрать внутренние блоки и получить ресурс там, где раньше было сопротивление. Почему наши записи уникальны? В клубе собраны лучшие практики, которых нет в открытом доступе. Я лично проверил просторы интернета — там нет той глубины и точности, которая необходима для реального результата. Студийное качество записи создаёт более глубокую атмосферу, нежели хрипящий микрофон. Попробуйте сами. Ваше «невозможное» на расстоянии одной практики.",
    duration: "По запросу",
    lessons: 1,
  },
];



function MandalaDecor() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] opacity-10 pointer-events-none">
      <div className="mandala-ring absolute inset-0 animate-spin-slow" style={{ animationDuration: "40s" }} />
      <div className="mandala-ring absolute inset-8 animate-spin-slow" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
      <div className="mandala-ring absolute inset-16" />
      <div className="mandala-ring absolute inset-24 animate-spin-slow" style={{ animationDuration: "50s" }} />
      <div className="mandala-ring absolute inset-36" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full" style={{ background: "var(--gold)" }} />
      </div>
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { id: "courses", label: "Курсы" },
    { id: "teacher", label: "О преподавателе" },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,252,245,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex flex-col items-start gap-0.5">
          <span className="font-display text-xl tracking-wider" style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
            Сакральная Зона
          </span>
          <span className="font-golos text-[9px] tracking-[0.3em] uppercase" style={{ color: "var(--gold-dim)" }}>
            Йога &amp; Знание
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link">
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("courses")}
            className="ml-4 px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-golos font-medium transition-all duration-300"
            style={{ border: "1px solid var(--gold-dim)", color: "var(--gold)", background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Записаться
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--gold)" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5" style={{ background: "rgba(255,252,245,0.98)" }}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-left py-1">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--deep-bg)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, #8b6508, transparent)", opacity: 0.07 }}
        />
        <MandalaDecor />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="font-golos text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>
              Сакральная Зона
            </span>
          </div>

          <h1 className="font-display mb-6 leading-tight" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#2a1f0e" }}>
            Путь внутрь
            <br />
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>себя</em>
          </h1>

          <p className="font-golos font-light leading-relaxed mb-10 max-w-md" style={{ color: "#5a4a35", fontSize: "1rem" }}>
            Мы живем в эпоху информационного шума, где «мудрость» раздается на каждом углу. Но Веды называют истинное знание словом «Шастра». Ша — наставление, Астра — оружие. Знание без системы — опасно. Оно либо лежит мертвым грузом, либо разрушает тебя изнутри, создавая иллюзии. Но в правильных руках это оружие уничтожает твоих внутренних демонов: страх, апатию и невежество. Клуб «Сакральная Зона» — это фильтр и практика. Мы убрали всё лишнее, оставив только авторитетные источники и работающие инструменты. Здесь ты не просто «узнаешь новое» — ты учишься владеть своим умом и телом как совершенным инструментом.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 font-golos text-sm font-medium tracking-wide transition-all duration-300"
              style={{ background: "var(--gold)", color: "#ffffff" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
            >
              Смотреть курсы клуба
            </button>
            <button
              onClick={() => document.getElementById("teacher")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 font-golos text-sm font-light tracking-wide transition-all duration-300"
              style={{ border: "1px solid rgba(160,120,32,0.3)", color: "#5a4a35" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(160,120,32,0.3)";
                e.currentTarget.style.color = "#5a4a35";
              }}
            >
              О преподавателе
            </button>
          </div>

          <div className="flex gap-10 mt-14">
            {[["200+", "учеников"], ["5 лет", "практики"], ["50+", "видеоуроков"]].map(([num, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display text-2xl font-semibold" style={{ color: "var(--gold-light)" }}>{num}</span>
                <span className="font-golos text-xs font-light" style={{ color: "#7a6850" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in hidden md:block" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div
            className="absolute -inset-4 rounded-full opacity-20 blur-xl animate-float"
            style={{ background: "radial-gradient(circle, #c9a84c, transparent 70%)" }}
          />
          <div className="relative overflow-hidden" style={{ borderRadius: "60% 40% 50% 50% / 50% 40% 60% 50%" }}>
            <img
              src={TEACHER_IMG}
              alt="Преподаватель йоги"
              className="w-full h-[520px] object-cover"
              style={{ filter: "sepia(20%) brightness(0.85)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 50%, rgba(245,240,232,0.4) 100%)" }}
            />
          </div>
          <div
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center"
            style={{ background: "var(--card-bg)", border: "1px solid rgba(160,120,32,0.3)" }}
          >
            <span className="font-display text-3xl" style={{ color: "var(--gold)", lineHeight: 1 }}>☯</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-golos text-[9px] tracking-[0.3em] uppercase" style={{ color: "var(--gold-dim)" }}>Прокрутите</span>
        <Icon name="ChevronDown" size={16} style={{ color: "var(--gold-dim)" }} />
      </div>
    </section>
  );
}

function CoursesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section id="courses" className="py-24 relative" style={{ background: "#f5f0e8" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#2a1f0e" }}>
              Свитки и курсы Сакральной Зоны
            </h2>
          </div>
          <p className="font-golos font-light max-w-xs text-sm leading-relaxed" style={{ color: "#7a6850" }}>
            Каждый курс — укрепляет русло твоей реки жизни которая движет тебя к твоей цели.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={course.id}
              className="card-hover relative overflow-hidden animate-fade-in"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(160,120,32,0.15)",
                animationDelay: `${i * 0.15}s`,
                opacity: 0,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, var(--gold-dim), transparent)" }}
              />
              <div className="p-8">
                <span
                  className="inline-block font-golos text-[9px] tracking-[0.35em] uppercase px-3 py-1 mb-6"
                  style={{ border: "1px solid rgba(201,168,76,0.25)", color: "var(--gold-dim)" }}
                >
                  {course.tag}
                </span>
                <h3 className="font-display text-xl mb-3 leading-snug" style={{ color: "#2a1f0e" }}>
                  {course.title}
                </h3>
                <p className="font-golos text-sm font-light leading-relaxed mb-8" style={{ color: "#7a6850" }}>
                  {course.desc}
                </p>
                {expanded === course.id && course.details && (
                  <p className="font-golos text-sm font-light leading-relaxed mb-8" style={{ color: "#7a6850" }}>
                    {course.details}
                  </p>
                )}
                <button
                  className="w-full py-3 font-golos text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
                  style={{ background: "transparent", border: "1px solid rgba(160,120,32,0.3)", color: "var(--gold)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                    e.currentTarget.style.borderColor = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(160,120,32,0.3)";
                  }}
                  onClick={() => setExpanded(expanded === course.id ? null : course.id)}
                >
                  {expanded === course.id ? "Свернуть" : "Подробнее"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "rgba(160,120,32,0.07)", border: "1px solid rgba(160,120,32,0.2)" }}
        >
          <div>
            <h4 className="font-display text-xl mb-1" style={{ color: "#2a1f0e" }}>Хранилище видеоуроков</h4>
            <p className="font-golos text-sm font-light" style={{ color: "#7a6850" }}>
              Все купленные курсы доступны в личном кабинете без ограничений по времени
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Icon name="Video" size={18} style={{ color: "var(--gold)" }} />
            <span className="font-golos text-sm" style={{ color: "var(--gold)" }}>50+ видеоуроков в базе</span>
          </div>
        </div>
      </div>
    </section>
  );
}


function TeacherSection() {
  return (
    <section id="teacher" className="py-24 relative overflow-hidden" style={{ background: "#f5f0e8" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(160,120,32,0.3), transparent)" }}
      />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div
            className="absolute -top-6 -left-6 right-6 bottom-6 opacity-20"
            style={{ border: "1px solid rgba(160,120,32,0.3)" }}
          />
          <img
            src={TEACHER_IMG}
            alt="Преподаватель"
            className="relative w-full h-[500px] object-cover"
            style={{ filter: "sepia(15%) brightness(0.82)" }}
          />
          <div
            className="absolute bottom-8 -right-6 p-5"
            style={{ background: "var(--card-bg)", border: "1px solid rgba(160,120,32,0.25)" }}
          >
            <div className="font-display text-4xl font-light mb-0.5" style={{ color: "var(--gold-light)" }}>12</div>
            <div className="font-golos text-xs font-light" style={{ color: "#6a5c48" }}>лет в практике</div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ background: "var(--gold)" }} />
            <span className="font-golos text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Преподаватель</span>
          </div>

          <h2 className="font-display mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2a1f0e" }}>
            Тельман Манвелян
          </h2>
          <p className="font-golos text-sm mb-8 font-light tracking-wide" style={{ color: "var(--gold-dim)" }}>
            Преподаватель йоги · Исследователь Веданты
          </p>

          <div className="space-y-5 mb-10">
            {[
              "В йоге с 2014 года. Получил традиционное йогическое образование и прослужил почти 2 года в ведическом монастыре. Это даёт моим практикам глубокую, аутентичную основу.",
              "Выпустил три потока преподавателей йоги. Провёл более 7 ретритов с глубокой перезагрузкой.",
              "Ключевой фокус практик: очищение энергоканалов тела (нади-шуддхи). Через это мы параллельно и гармонично развиваем силу, гибкость и спокойствие ума.",
              "Есть опыт самадхи, но мой гуру сказал — это не главное. Главное — служение!",
            ].map((text, i) => (
              <p key={i} className="font-golos text-sm font-light leading-relaxed" style={{ color: "#6a5040" }}>
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {["Хатха-йога", "Веданта", "Пранаяма", "Йога-нидра", "Медитация"].map((skill) => (
              <span
                key={skill}
                className="font-golos text-[10px] tracking-[0.25em] uppercase px-3 py-1.5"
                style={{ border: "1px solid rgba(201,168,76,0.2)", color: "var(--gold-dim)" }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/telmango"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 font-golos text-sm tracking-wide font-medium transition-all duration-300"
              style={{ background: "var(--gold)", color: "#ffffff", display: "inline-block" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
            >
              Задать вопрос Тельману по клубу
            </a>
            <a
              href="https://t.me/tribute/app?startapp=sToA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 font-golos text-sm tracking-wide font-medium transition-all duration-300 flex flex-col items-center justify-center"
              style={{ background: "#ffffff", color: "#2a1f0e", border: "1px solid rgba(160,120,32,0.3)", display: "inline-flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(160,120,32,0.3)")}
            >
              <span>Подписаться в клуб — <span style={{ textDecoration: "line-through", opacity: 0.5 }}>2500₽</span> 777₽/мес</span>
              <span className="font-golos text-[10px] font-light mt-0.5" style={{ color: "#7a6850" }}>(работает только с телефона)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-12 relative" style={{ background: "#f0ebe0", borderTop: "1px solid rgba(160,120,32,0.15)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display text-lg tracking-wider" style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
            Сакральная Зона
          </span>
          <span className="font-golos text-[9px] tracking-[0.3em] uppercase" style={{ color: "var(--gold-dim)" }}>
            Йога &amp; Знание
          </span>
        </div>
        <div className="flex gap-8">
          {[["courses", "Курсы"], ["teacher", "О преподавателе"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-golos text-xs font-light tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: "#4a3e30" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a3e30")}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="font-golos text-[10px] font-light" style={{ color: "#9a8870" }}>
          © 2026 Сакральная Зона
        </p>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "var(--deep-bg)" }}>
      <NavBar />
      <HeroSection />
      <CoursesSection />

      <TeacherSection />
      <Footer />
    </div>
  );
}