import {
  Scissors,
  Sparkles,
  Flower2,
  Heart,
  PenTool,
  Hand,
  Building2,
  Calendar,
  UserPlus,
  CreditCard,
  Users,
  Award,
  Gift,
  Package,
  CalendarClock,
  Percent,
  Wallet,
  List,
  Box,
  ShoppingBag,
  BarChart3,
  FileText,
  Lock,
  Clock,
  ShieldCheck,
  WifiOff,
  SprayCan,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  // industries
  scissors: Scissors,
  sparkles: Sparkles,
  flower: Flower2,
  heart: Heart,
  pen: PenTool,
  hand: Hand,
  razor: Scissors,
  skin: SprayCan,
  leaf: Flower2,
  building: Building2,
  // features
  calendar: Calendar,
  "user-plus": UserPlus,
  "credit-card": CreditCard,
  users: Users,
  badge: Award,
  gift: Gift,
  package: Package,
  "calendar-clock": CalendarClock,
  percent: Percent,
  wallet: Wallet,
  list: List,
  box: Box,
  "shopping-bag": ShoppingBag,
  "bar-chart": BarChart3,
  "file-text": FileText,
  safe: Lock,
  clock: Clock,
  shield: ShieldCheck,
  "wifi-off": WifiOff,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
