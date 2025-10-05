import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Чистый город',
    description: 'Организация субботников и экологических акций по благоустройству города',
    status: 'В реализации',
    category: 'Благоустройство',
    members: 24,
    progress: 65,
  },
  {
    id: 2,
    title: 'Спортивный дворик',
    description: 'Строительство современной спортивной площадки для молодежи',
    status: 'Сбор команды',
    category: 'Спорт',
    members: 12,
    progress: 30,
  },
  {
    id: 3,
    title: 'Творческая мастерская',
    description: 'Создание пространства для развития творческих навыков и проведения мастер-классов',
    status: 'В реализации',
    category: 'Творчество',
    members: 18,
    progress: 75,
  },
  {
    id: 4,
    title: 'Помощь пожилым',
    description: 'Волонтерская помощь пожилым жителям округа',
    status: 'В реализации',
    category: 'Волонтерство',
    members: 31,
    progress: 85,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Молодежные проекты
          </h1>
          <p className="text-muted-foreground text-lg">
            Присоединяйтесь к активным проектам или предложите свою идею
          </p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          <Badge variant="default" className="cursor-pointer">Все</Badge>
          <Badge variant="outline" className="cursor-pointer">Благоустройство</Badge>
          <Badge variant="outline" className="cursor-pointer">Спорт</Badge>
          <Badge variant="outline" className="cursor-pointer">Творчество</Badge>
          <Badge variant="outline" className="cursor-pointer">Волонтерство</Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                </div>
                <Badge variant={project.status === 'В реализации' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Участников:</span>
                  <span className="font-semibold">{project.members}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Прогресс</span>
                    <span className="font-semibold">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <Button className="w-full gradient-primary">
                Присоединиться к проекту
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            <Target className="mr-2 h-5 w-5" />
            Предложить свой проект
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
