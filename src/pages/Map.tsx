import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Plus, ThumbsUp, AlertTriangle, Lightbulb } from 'lucide-react';

const markers = [
  {
    id: 1,
    type: 'problem',
    title: 'Разбитая дорога на ул. Ленина',
    description: 'Требуется ремонт дорожного покрытия',
    likes: 45,
    location: 'ул. Ленина, 12',
  },
  {
    id: 2,
    type: 'idea',
    title: 'Место для скейт-парка',
    description: 'Предлагаю построить скейт-парк в этом районе',
    likes: 89,
    location: 'Парк Победы',
  },
  {
    id: 3,
    type: 'problem',
    title: 'Недостаточное освещение',
    description: 'Необходимо установить дополнительные фонари',
    likes: 23,
    location: 'ул. Советская, 45',
  },
  {
    id: 4,
    type: 'idea',
    title: 'Велодорожка вдоль реки',
    description: 'Идея создания велодорожки для активного отдыха',
    likes: 67,
    location: 'Набережная',
  },
];

const Map = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Интерактивная карта
          </h1>
          <p className="text-muted-foreground text-lg">
            Отмечайте проблемы и предлагайте идеи для развития округа
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6 h-[600px] flex items-center justify-center bg-secondary">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Карта в разработке</h3>
                <p className="text-muted-foreground mb-4">
                  Интеграция с Yandex Maps будет добавлена в ближайшее время
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Для подключения карты необходимо:</p>
                  <p>1. Получить API ключ Yandex Maps</p>
                  <p>2. Добавить его в настройки проекта</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <Button className="flex-1 gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                Добавить метку
              </Button>
            </div>

            <div className="flex gap-2">
              <Badge variant="outline" className="flex items-center gap-1 cursor-pointer">
                <AlertTriangle className="h-3 w-3" />
                Проблемы
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 cursor-pointer">
                <Lightbulb className="h-3 w-3" />
                Идеи
              </Badge>
            </div>

            <div className="space-y-3 max-h-[520px] overflow-y-auto">
              {markers.map((marker) => (
                <Card key={marker.id} className="p-4 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      marker.type === 'problem' 
                        ? 'bg-destructive/20 text-destructive' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {marker.type === 'problem' ? (
                        <AlertTriangle className="h-4 w-4" />
                      ) : (
                        <Lightbulb className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-sm">{marker.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {marker.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {marker.location}
                        </span>
                        <button className="flex items-center gap-1 text-xs hover:text-primary transition-colors">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{marker.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
