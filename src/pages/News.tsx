import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Стартовал конкурс молодежных проектов 2025',
    excerpt: 'Приглашаем всех молодых жителей округа принять участие в ежегодном конкурсе социальных проектов.',
    category: 'Конкурсы',
    date: '15 января 2025',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80'
  },
  {
    id: 2,
    title: 'Открытие нового молодежного пространства',
    excerpt: 'В центре города открылось современное пространство для работы и творчества молодежи.',
    category: 'События',
    date: '12 января 2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    id: 3,
    title: 'Грант на развитие волонтерских инициатив',
    excerpt: 'Объявлен прием заявок на получение грантовой поддержки для волонтерских проектов.',
    category: 'Гранты',
    date: '10 января 2025',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80'
  },
  {
    id: 4,
    title: 'Спортивный фестиваль для молодежи',
    excerpt: 'В феврале пройдет масштабный спортивный фестиваль с участием молодежных команд.',
    category: 'Спорт',
    date: '8 января 2025',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80'
  },
];

const News = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Новости и события
          </h1>
          <p className="text-muted-foreground text-lg">
            Актуальная информация о мероприятиях, конкурсах и проектах
          </p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          <Badge variant="default" className="cursor-pointer">Все</Badge>
          <Badge variant="outline" className="cursor-pointer">Конкурсы</Badge>
          <Badge variant="outline" className="cursor-pointer">События</Badge>
          <Badge variant="outline" className="cursor-pointer">Гранты</Badge>
          <Badge variant="outline" className="cursor-pointer">Спорт</Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:shadow-glow transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{item.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="group/btn">
                  Читать далее
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
