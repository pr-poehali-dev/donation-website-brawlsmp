import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationTiers = [
    {
      name: "VIP",
      price: "150₽",
      originalPrice: "200₽",
      color: "bg-gradient-to-r from-green-500 to-green-600",
      features: [
        "Цветной ник в чате",
        "Доступ к /kit vip",
        "Приоритет входа на сервер",
        "Префикс [VIP]",
      ],
      icon: "Star",
      discount: "25%",
    },
    {
      name: "Премиум",
      price: "300₽",
      originalPrice: "400₽",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      features: [
        "Все VIP привилегии",
        "Флай на 1 час",
        "Кит /kit premium",
        "Доступ к /back",
      ],
      icon: "Crown",
      discount: "25%",
    },
    {
      name: "Deluxe",
      price: "525₽",
      originalPrice: "700₽",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      features: [
        "Все Премиум привилегии",
        "Безлимитный флай",
        "Кит /kit deluxe",
        "Команда /feed",
      ],
      icon: "Gem",
      discount: "25%",
    },
    {
      name: "Легенда",
      price: "750₽",
      originalPrice: "1000₽",
      color: "bg-gradient-to-r from-orange-500 to-red-600",
      features: [
        "Все Deluxe привилегии",
        "Особый префикс [LEGEND]",
        "Кит /kit legend",
        "Команда /heal",
      ],
      icon: "Sword",
      discount: "25%",
    },
    {
      name: "Ультра",
      price: "1125₽",
      originalPrice: "1500₽",
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
      features: [
        "Все Легенда привилегии",
        "Команда /god",
        "Кит /kit ultra",
        "Доступ к /gamemode 1",
      ],
      icon: "Zap",
      discount: "25%",
    },
    {
      name: "Спонсор",
      price: "1875₽",
      originalPrice: "2500₽",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      features: [
        "Все Ультра привилегии",
        "Креативный режим",
        "Кит /kit sponsor",
        "Особые эффекты",
      ],
      icon: "Trophy",
      discount: "25%",
    },
  ];

  const serverStats = [
    { label: "Игроков онлайн", value: "142", icon: "Users" },
    { label: "Всего игроков", value: "8,743", icon: "UserCheck" },
    { label: "Пожертвований", value: "₽127,350", icon: "Heart" },
    { label: "Дней работы", value: "234", icon: "Clock" },
  ];

  const news = [
    {
      title: "Новое обновление PvP арены",
      date: "2 часа назад",
      content:
        "Добавлена новая арена для PvP сражений с уникальными механиками",
    },
    {
      title: "Акция на донат-привилегии",
      date: "1 день назад",
      content: "Скидка 25% на все донат-привилегии до конца недели!",
    },
    {
      title: "Конкурс на лучшую постройку",
      date: "3 дня назад",
      content: "Участвуйте в конкурсе строителей и выиграйте донат-привилегии",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900 to-black py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="/img/7dbcb3cf-2639-49d1-bb9e-dcfaa6508183.jpg"
              alt="BrawlSMP Logo"
              className="mx-auto mb-6 w-48 h-48 object-contain rounded-xl shadow-2xl shadow-purple-500/30"
            />
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              BRAWL SMP
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Современный взгляд на сервера!
            </p>
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-2">IP: brawlsmp.ru</p>
              <p className="text-gray-400">Версия: 1.16.5 - 1.20.x</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 text-lg">
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Discord: brawlsmp
            </Button>
          </div>

          {/* Server Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serverStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm"
              >
                <CardContent className="p-4 text-center">
                  <Icon
                    name={stat.icon}
                    className="mx-auto mb-2 text-purple-400"
                    size={24}
                  />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Донат-привилегии
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationTiers.map((tier, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
              >
                {tier.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold z-10">
                    -{tier.discount}
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${tier.color}`}>
                        <Icon
                          name={tier.icon}
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">
                          {tier.name}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <CardDescription className="text-2xl font-bold text-purple-400">
                            {tier.price}
                          </CardDescription>
                          {tier.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {tier.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-400"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${tier.color} hover:opacity-90 text-white relative overflow-hidden`}
                  >
                    <span className="relative z-10">Купить {tier.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Статистика сервера
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon
                    name="TrendingUp"
                    className="text-green-400"
                    size={24}
                  />
                  <h3 className="text-lg font-semibold text-white">
                    Рост онлайна
                  </h3>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  +23%
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-sm text-gray-400 mt-2">За последний месяц</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Target" className="text-blue-400" size={24} />
                  <h3 className="text-lg font-semibold text-white">
                    PvP матчи
                  </h3>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  1,247
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-sm text-gray-400 mt-2">Сегодня</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Building" className="text-yellow-400" size={24} />
                  <h3 className="text-lg font-semibold text-white">
                    Постройки
                  </h3>
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  45,892
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-sm text-gray-400 mt-2">Всего создано</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Coins" className="text-purple-400" size={24} />
                  <h3 className="text-lg font-semibold text-white">
                    Экономика
                  </h3>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  ₽2.1M
                </div>
                <Progress value={90} className="h-2" />
                <p className="text-sm text-gray-400 mt-2">Оборот валюты</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Последние новости
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                    <Icon name="Clock" size={16} />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{item.content}</p>
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  >
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                BrawlSMP
              </h3>
              <p className="text-gray-400">Современный взгляд на сервера!</p>
              <p className="text-gray-400 mt-2">IP: brawlsmp.ru</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Быстрые ссылки
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Правила сервера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Карта мира
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Форум
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Социальные сети
              </h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                >
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                >
                  <Icon name="Youtube" size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                >
                  <Icon name="Users" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BrawlSMP. Все права защищены.</p>
            <p className="mt-2 text-sm">Платежная система: EasyDonate</p>
            <p className="mt-1 text-sm">IP: brawlsmp.ru | Discord: brawlsmp</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
