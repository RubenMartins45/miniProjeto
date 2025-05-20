
import React from 'react';
import { userStats } from '@/utils/wasteTypes';

const ProgressStats = () => {
  // Calculate the percentage for each level
  const levelProgress = ((userStats.level - Math.floor(userStats.level)) * 100).toFixed(0);
  
  return (
    <div className="eco-card mb-6">
      <h2 className="text-xl font-semibold mb-4">Seu Progresso</h2>
      
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Nível {Math.floor(userStats.level)} → {Math.floor(userStats.level) + 1}</span>
          <span className="text-sm font-medium">{levelProgress}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-bar-fill bg-primary" 
            style={{ "--progress-width": `${levelProgress}%` } as React.CSSProperties} 
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <p className="text-xs text-muted-foreground">Total Reciclado</p>
          <p className="text-xl font-bold">{userStats.totalRecycled} kg</p>
        </div>
        
        <div className="p-3 bg-green-500/10 rounded-lg">
          <p className="text-xs text-muted-foreground">CO₂ Evitado</p>
          <p className="text-xl font-bold">{userStats.impactData.co2} kg</p>
        </div>
        
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <p className="text-xs text-muted-foreground">Água Poupada</p>
          <p className="text-xl font-bold">{userStats.impactData.water} L</p>
        </div>
        
        <div className="p-3 bg-accent/10 rounded-lg">
          <p className="text-xs text-muted-foreground">Equivalente em Árvores</p>
          <p className="text-xl font-bold">{userStats.impactData.trees}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;
