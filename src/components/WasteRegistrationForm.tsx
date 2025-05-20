
import React, { useState } from 'react';
import { wasteTypes } from '@/utils/wasteTypes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { Trash } from 'lucide-react';

const WasteRegistrationForm = () => {
  const [selected, setSelected] = useState(wasteTypes[0].id);
  const [weight, setWeight] = useState('1.0');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submitting the data
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      
      // Find the selected waste type to calculate points
      const wasteType = wasteTypes.find(type => type.id === selected);
      const points = wasteType ? Math.floor(parseFloat(weight) * wasteType.pointsPerKg) : 0;
      
      // Show success message with the points earned
      toast.success(`Resíduo registado com sucesso! Ganhou ${points} pontos.`, {
        description: `${weight}kg de ${wasteType?.name} foram adicionados à sua conta.`,
      });
      
      // Reset form (optionally)
      setWeight('1.0');
    }, 1500);
  };

  return (
    <div className="eco-card">
      <div className="flex items-center gap-2 mb-4">
        <Trash className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Registar Resíduos</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="waste-type">Tipo de Resíduo</Label>
          <RadioGroup 
            id="waste-type" 
            value={selected} 
            onValueChange={setSelected} 
            className="grid grid-cols-2 gap-2 mt-2"
          >
            {wasteTypes.map(type => (
              <div 
                key={type.id} 
                className={`relative flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted ${selected === type.id ? 'border-primary bg-primary/5' : ''}`}
              >
                <RadioGroupItem value={type.id} id={type.id} className="sr-only" />
                <Label htmlFor={type.id} className="w-full cursor-pointer flex items-center gap-2">
                  <span className="text-xl">{type.icon}</span>
                  <span>{type.name}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div>
          <Label htmlFor="weight">Peso (kg)</Label>
          <Input
            id="weight"
            type="number"
            min="0.1"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="upload-photo" className="block mb-2">Foto do Resíduo (Opcional)</Label>
          <Input id="upload-photo" type="file" accept="image/*" className="cursor-pointer" />
          <p className="text-xs text-muted-foreground mt-1">
            Ajuda-nos a verificar e a melhorar o nosso sistema
          </p>
        </div>
        
        <Button type="submit" className="w-full" disabled={uploading}>
          {uploading ? 'A Submeter...' : 'Registar Resíduo'}
        </Button>
      </form>
    </div>
  );
};

export default WasteRegistrationForm;
