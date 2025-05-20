
import React from 'react';
import { achievements } from '@/utils/wasteTypes';
import { Medal } from 'lucide-react';

const AchievementCard = () => {
  return (
    <div className="eco-card">
      <div className="flex items-center gap-2 mb-4">
        <Medal className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Conquistas</h2>
      </div>
      
      <div className="space-y-4">
        {achievements.map(achievement => (
          <div 
            key={achievement.id} 
            className={`p-3 rounded-lg border flex items-center gap-3 ${achievement.completed ? 'bg-primary/5 border-primary/20' : 'bg-muted/30'}`}
          >
            <div className="text-2xl">
              {achievement.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{achievement.name}</h3>
                {achievement.completed && (
                  <span className="text-xs text-primary">Completado</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
              
              {!achievement.completed && achievement.progress !== undefined && (
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{achievement.progress} de {achievement.total}</span>
                    <span>{Math.floor((achievement.progress / achievement.total) * 100)}%</span>
                  </div>
                  <div className="progress-bar h-1">
                    <div 
                      className="progress-bar-fill bg-secondary" 
                      style={{ "--progress-width": `${(achievement.progress / achievement.total) * 100}%` } as React.CSSProperties} 
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementCard;
