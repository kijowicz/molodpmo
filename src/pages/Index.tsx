import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Users, Target, TrendingUp, Calendar, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const stats = [
    { label: 'Активных проектов', value: '15+', icon: Target },
    { label: 'Участников', value: '500+', icon: Users },
    { label: 'Проведено мероприятий', value: '50+', icon: Calendar },
    { label: 'Реализованных идей', value: '20+', icon: TrendingUp },
  ];

  const features = [
    {
      title: 'Новости и события',
      description: 'Будьте в курсе всех мероприятий, конкурсов и грантов',
      icon: Calendar,
      link: '/news',
    },
    {
      title: 'Интерактивная карта',
      description: 'Отмечайте проблемы и предлагайте идеи для развития',
      icon: MapPin,
      link: '/map',
    },
    {
      title: 'Молодежные проекты',
      description: 'Присоединяйтесь к проектам или создайте свой',
      icon: Target,
      link: '/projects',
    },
    {
      title: 'Форум',
      description: 'Обсуждайте идеи и находите единомышленников',
      icon: MessageSquare,
      link: '/forum',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Молодежь{' '}
              <span className="text-gradient">
                Партизанского МО
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Цифровая платформа для вовлечения молодежи в социально-экономическое развитие территории
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-lg px-8">
                Присоединиться
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Возможности платформы
            </h2>
            <p className="text-lg text-muted-foreground">
              Все инструменты для активного участия в жизни округа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="p-8 h-full hover:shadow-glow transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg gradient-primary">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 text-center gradient-card border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы изменить округ к лучшему?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к сообществу активной молодежи Партизанского МО
            </p>
            <Button size="lg" className="gradient-primary text-lg px-8">
              Зарегистрироваться сейчас
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
