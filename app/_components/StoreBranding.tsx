import { Store } from 'lucide-react';

export function StoreBranding() {
  return (
    <div className="flex items-center gap-2">
      <Store className="h-8 w-8 text-primary" />
      <h1 className="text-xl font-bold text-gray-900">FreshCart</h1>
    </div>
  );
}