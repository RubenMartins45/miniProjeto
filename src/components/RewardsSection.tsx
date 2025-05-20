
import React from 'react';
import { Button } from '@/components/ui/button';
import { rewards, userStats } from '@/utils/wasteTypes';
import { Coins, Gift, CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

const RewardsSection = () => {
  const handleRedeemReward = (reward: any) => {
    if (userStats.totalPoints >= reward.points) {
      toast.success(`Recompensa resgatada com sucesso!`, {
        description: `Você trocou ${reward.points} pontos por "${reward.name}".`,
      });
    } else {
      toast.error(`Pontos insuficientes`, {
        description: `Você precisa de mais ${reward.points - userStats.totalPoints} pontos para esta recompensa.`,
      });
    }
  };

  return (
    <div className="eco-card">
      <div className="flex items-center gap-2 mb-4">
        <Gift className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Recompensas Disponíveis</h2>
      </div>
      
      <p className="text-sm text-muted-foreground mb-6">
        Troque seus pontos por benefícios ou faça doações para causas ambientais.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rewards.map((reward) => (
          <div key={reward.id} className="border rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-2xl">{reward.icon}</div>
              <h3 className="font-medium">{reward.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground flex-1 mb-3">{reward.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Coins className="h-4 w-4 text-accent-foreground" />
                <span className="font-medium">{reward.points} pontos</span>
              </div>
              <Button 
                variant={userStats.totalPoints >= reward.points ? "default" : "outline"} 
                size="sm"
                onClick={() => handleRedeemReward(reward)}
              >
                {userStats.totalPoints >= reward.points && <CircleCheck className="mr-1 h-4 w-4" />}
                Resgatar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsSection;
