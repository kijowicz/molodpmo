import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Clock } from 'lucide-react';

const polls = [
  {
    id: 1,
    title: 'Какое мероприятие вы хотите посетить?',
    description: 'Помогите нам выбрать формат следующего мероприятия',
    options: [
      { id: 1, text: 'Спортивный фестиваль', votes: 45, percentage: 35 },
      { id: 2, text: 'Творческий концерт', votes: 32, percentage: 25 },
      { id: 3, text: 'Образовательный форум', votes: 28, percentage: 22 },
      { id: 4, text: 'Волонтерская акция', votes: 23, percentage: 18 },
    ],
    totalVotes: 128,
    status: 'Активен',
    endDate: '20 января 2025',
  },
  {
    id: 2,
    title: 'Приоритетная сфера развития',
    description: 'Что важнее всего для молодежи округа?',
    options: [
      { id: 1, text: 'Спорт и здоровье', votes: 67, percentage: 38 },
      { id: 2, text: 'Образование', votes: 52, percentage: 29 },
      { id: 3, text: 'Культура и творчество', votes: 34, percentage: 19 },
      { id: 4, text: 'Экология', votes: 25, percentage: 14 },
    ],
    totalVotes: 178,
    status: 'Активен',
    endDate: '25 января 2025',
  },
];

const Polls = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Опросы и голосования
          </h1>
          <p className="text-muted-foreground text-lg">
            Выскажите свое мнение и помогите принять важные решения
          </p>
        </div>

        <div className="space-y-8">
          {polls.map((poll) => (
            <Card key={poll.id} className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{poll.title}</h2>
                  <p className="text-muted-foreground">{poll.description}</p>
                </div>
                <Badge variant="default">{poll.status}</Badge>
              </div>

              <div className="space-y-3 mb-6">
                {poll.options.map((option) => (
                  <button
                    key={option.id}
                    className="w-full group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {option.text}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {option.percentage}% ({option.votes})
                      </span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full transition-all duration-500 group-hover:shadow-glow"
                        style={{ width: `${option.percentage}%` }}
                      />
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>Всего голосов: {poll.totalVotes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>До {poll.endDate}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Голосовать
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Polls;
