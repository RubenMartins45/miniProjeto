
import React from 'react';
import { userStats } from '@/utils/wasteTypes';
import { Award, Star, Trophy } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 border-b border-border">
      <div className="mb-4 md:mb-0">
        <h1 className="text-3xl font-bold text-primary">Eco<span className="text-secondary">Rewards</span></h1>
        <p className="text-muted-foreground">Recicle, Acumule Pontos, Receba Recompensas</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="icon-circle">
            <Star className="h-5 w-5" />
          </div>
          <span className="stat-value">{userStats.totalPoints}</span>
          <span className="stat-label">Pontos</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="icon-circle">
            <Trophy className="h-5 w-5" />
          </div>
          <span className="stat-value">{userStats.achievements}</span>
          <span className="stat-label">Conquistas</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="icon-circle">
            <Award className="h-5 w-5" />
          </div>
          <span className="stat-value">{userStats.level}</span>
          <span className="stat-label">Nível</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
