import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const popularContent = [
    {
        id: 1,
        title: 'JavaScript Tutorial',
        badge: 'Coding',
        image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 4300,
    },
    {
        id: 2,
        title: 'Tech Trends 2025',
        badge: 'Tech',
        image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 3200,
    },
    {
        id: 3,
        title: 'The Future of AI',
        badge: 'AI',
        image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 2400,
    },
    {
        id: 4,
        title: 'React Hooks Explained',
        badge: 'Coding',
        image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 1500,
    },
    {
        id: 5,
        title: 'Image Generation with AI',
        badge: 'AI',
        image: 'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 1200,
    },
];

const latestTransactions = [
    {
        id: 1,
        title: 'Subscription Renewal',
        badge: 'John Doe',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        count: 1400,
    },
    {
        id: 2,
        title: 'Payment for Services',
        badge: 'Jane Smith',
        image: 'https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 2100,
    },
    {
        id: 3,
        title: 'Subscription Renewal',
        badge: 'Michael Johnson',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 1300,
    },
    {
        id: 4,
        title: 'Payment for Services',
        badge: 'Lily Adams',
        image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 2500,
    },
    {
        id: 5,
        title: 'Subscription Renewal',
        badge: 'Sam Brown',
        image: 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800',
        count: 1400,
    },
];

const CardList = ({ title }: { title: string }) => {
    const list = title === 'Popular Content' ? popularContent : latestTransactions;
    return (
        <div>
            <h1 className="mb-6 text-lg font-medium">{title}</h1>
            <div className="flex flex-col gap-2">
                {list.map((item) => (
                    <Card key={item.id} className="flex flex-row items-center justify-between gap-2 p-2">
                        <div className="relative h-12 w-12 overflow-hidden rounded-sm">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <CardContent className="flex-1 p-0">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant="secondary" className="">
                                {item.badge}
                            </Badge>
                        </CardContent>
                        <CardFooter className="!p-0 text-sm">{item.count / 1000}K</CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};
export default CardList;
