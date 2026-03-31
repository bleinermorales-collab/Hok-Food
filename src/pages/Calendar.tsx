import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import { mockContentIdeas } from '@/data/mock';

const DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); // April 2026

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = (firstDay.getDay() + 6) % 7; // Monday-based
  const daysInMonth = lastDay.getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthName = currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

  // Map scheduled content to dates
  const scheduledByDate = mockContentIdeas.reduce((acc, content) => {
    if (content.scheduled) {
      const dateStr = content.scheduled;
      if (!acc[dateStr]) acc[dateStr] = [];
      acc[dateStr].push(content);
    }
    return acc;
  }, {} as Record<string, typeof mockContentIdeas>);

  const getDateStr = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const today = new Date();
  const isToday = (day: number) =>
    today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

  const typeColors: Record<string, string> = {
    post: 'bg-primary',
    carousel: 'bg-accent',
    reel: 'bg-green-500',
    story: 'bg-yellow-500',
  };

  return (
    <AppLayout>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground mb-1">Calendario</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Planifica y programa tu contenido de Instagram.
        </p>
      </motion.div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-foreground capitalize">{monthName}</h2>
        <button
          onClick={nextMonth}
          className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden mb-6">
        {/* Day Headers */}
        <div className="grid grid-cols-7 border-b border-border">
          {DAYS.map((day) => (
            <div key={day} className="text-center py-2 text-xs font-semibold text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[60px] md:min-h-[80px] border-b border-r border-border bg-muted/30" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = getDateStr(day);
            const scheduled = scheduledByDate[dateStr] || [];
            const dayIsToday = isToday(day);

            return (
              <div
                key={day}
                className={`min-h-[60px] md:min-h-[80px] border-b border-r border-border p-1 relative transition-colors hover:bg-muted/50 ${
                  dayIsToday ? 'bg-primary/5' : ''
                }`}
              >
                <span
                  className={`text-xs font-medium inline-flex items-center justify-center w-6 h-6 rounded-full ${
                    dayIsToday
                      ? 'gradient-brand text-primary-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {day}
                </span>
                <div className="mt-0.5 space-y-0.5">
                  {scheduled.map((content) => (
                    <div
                      key={content.id}
                      className={`${typeColors[content.type]} text-white text-[8px] md:text-[10px] px-1 py-0.5 rounded truncate font-medium`}
                      title={content.title}
                    >
                      {content.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-sm ${color}`} />
            <span className="text-xs text-muted-foreground capitalize">{type}</span>
          </div>
        ))}
      </div>

      {/* Scheduled Content List */}
      <section>
        <h2 className="text-lg font-bold text-foreground mb-3">📅 Próximas publicaciones</h2>
        <div className="space-y-3">
          {mockContentIdeas
            .filter((c) => c.scheduled)
            .sort((a, b) => (a.scheduled! > b.scheduled! ? 1 : -1))
            .map((content) => (
              <div
                key={content.id}
                className="bg-card rounded-xl p-4 shadow-soft border border-border flex items-center gap-3"
              >
                <div className={`w-2 h-10 rounded-full ${typeColors[content.type]}`} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-foreground truncate">{content.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {content.scheduled} · {content.type}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default Calendar;
