import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, ThumbsUp, User, Plus } from 'lucide-react';

const categories = [
  { id: 1, name: 'Благоустройство', topics: 12, posts: 45 },
  { id: 2, name: 'Спорт', topics: 8, posts: 32 },
  { id: 3, name: 'Творчество', topics: 15, posts: 67 },
  { id: 4, name: 'Волонтерство', topics: 10, posts: 38 },
  { id: 5, name: 'Образование', topics: 6, posts: 24 },
];

const recentTopics = [
  {
    id: 1,
    title: 'Идеи по благоустройству парка Победы',
    category: 'Благоустройство',
    author: 'Алексей М.',
    replies: 12,
    likes: 24,
    lastActivity: '5 мин назад',
  },
  {
    id: 2,
    title: 'Организация футбольного турнира',
    category: 'Спорт',
    author: 'Мария К.',
    replies: 8,
    likes: 15,
    lastActivity: '23 мин назад',
  },
  {
    id: 3,
    title: 'Поиск волонтеров для помощи пожилым',
    category: 'Волонтерство',
    author: 'Дмитрий С.',
    replies: 18,
    likes: 32,
    lastActivity: '1 час назад',
  },
  {
    id: 4,
    title: 'Мастер-класс по рисованию',
    category: 'Творчество',
    author: 'Елена Р.',
    replies: 5,
    likes: 9,
    lastActivity: '2 часа назад',
  },
];

const Forum = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Форум молодежи
          </h1>
          <p className="text-muted-foreground text-lg">
            Обсуждайте идеи, делитесь опытом и находите единомышленников
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Последние темы</h2>
              <Button className="gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                Создать тему
              </Button>
            </div>

            {recentTopics.map((topic) => (
              <Card key={topic.id} className="p-6 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{topic.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {topic.lastActivity}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary cursor-pointer transition-colors">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{topic.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{topic.replies} ответов</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{topic.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Категории</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors text-left"
                  >
                    <span className="font-medium">{category.name}</span>
                    <div className="text-xs text-muted-foreground">
                      <span>{category.topics} тем</span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 gradient-card border-primary/20">
              <h3 className="text-xl font-semibold mb-2">Активность</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Тем всего:</span>
                  <span className="font-semibold">51</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сообщений:</span>
                  <span className="font-semibold">206</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Участников:</span>
                  <span className="font-semibold">127</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
