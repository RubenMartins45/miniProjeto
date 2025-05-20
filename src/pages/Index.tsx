
import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import WasteRegistrationForm from '@/components/WasteRegistrationForm';
import ProgressStats from '@/components/ProgressStats';
import AchievementCard from '@/components/AchievementCard';
import RewardsSection from '@/components/RewardsSection';
import ImpactMetrics from '@/components/ImpactMetrics';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <DashboardHeader />
        
        <div className="py-6">
          <ProgressStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <WasteRegistrationForm />
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <AchievementCard />
              <RewardsSection />
            </div>
          </div>
          
          <div className="mt-6">
            <ImpactMetrics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
