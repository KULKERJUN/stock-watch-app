import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Calendar, User, BarChart3, Bell, Star, MapPin } from "lucide-react";

type UserProfilePageProps = {
    params: Promise<{
        userId: string;
    }>;
};

// Mock user data - In a real app, this would come from a database/API
const getUserProfile = async (userId: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Mock data - replace with actual API call
    return {
        id: userId,
        name: 'Ahnaf Iqbal',
        username: 'ahnaf_iqbal',
        email: 'ahnaf_iqbal@gmail.com',
        photo: 'https://easydrawingguides.com/wp-content/uploads/2017/04/how-to-draw-goku-featured-image-1200.png',
        joinDate: new Date('2024-01-15'),
        bio: 'Passionate stock market enthusiast and investor. Always learning and exploring new opportunities in the financial markets.',
        location: 'New York, USA',
        watchlistCount: 12,
        alertsCount: 5,
        investmentGoals: 'Growth',
        riskTolerance: 'Medium',
        preferredIndustry: 'Technology',
    };
};

export default async function UserProfile({ params }: UserProfilePageProps) {
    const { userId } = await params;
    const user = await getUserProfile(userId);

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Profile Header */}
            <div className="bg-gray-800 rounded-lg border border-gray-600 p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Avatar */}
                    <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-gray-700">
                        <AvatarImage src={user.photo} alt={user.name} />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-4xl font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>

                    {/* User Info */}
                    <div className="flex-1 space-y-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
                                {user.name}
                            </h1>
                            <p className="text-lg text-gray-400">@{user.username}</p>
                        </div>

                        {user.bio && (
                            <p className="text-gray-400 leading-relaxed max-w-2xl">
                                {user.bio}
                            </p>
                        )}

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span className="text-sm">
                                    <span className="font-semibold text-gray-300">{user.watchlistCount}</span> Watchlist
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Bell className="h-4 w-4 text-yellow-500" />
                                <span className="text-sm">
                                    <span className="font-semibold text-gray-300">{user.alertsCount}</span> Alerts
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information Card */}
                <div className="bg-gray-800 rounded-lg border border-gray-600 p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-yellow-500" />
                        Personal Information
                    </h2>
                    
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <User className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">User ID</p>
                                <p className="text-gray-300 font-mono text-sm">{user.id}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-gray-300">{user.email}</p>
                            </div>
                        </div>

                        {user.location && (
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-gray-300">{user.location}</p>
                                </div>
                            </div>
                        )}

                        <div className="flex items-start gap-3">
                            <Calendar className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-gray-500">Member Since</p>
                                <p className="text-gray-300">{formatDate(user.joinDate)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Investment Preferences Card */}
                <div className="bg-gray-800 rounded-lg border border-gray-600 p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-yellow-500" />
                        Investment Preferences
                    </h2>
                    
                    <div className="space-y-3">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Investment Goal</p>
                            <p className="text-gray-300 font-medium">{user.investmentGoals}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 mb-1">Risk Tolerance</p>
                            <p className="text-gray-300 font-medium">{user.riskTolerance}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 mb-1">Preferred Industry</p>
                            <p className="text-gray-300 font-medium">{user.preferredIndustry}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity Stats */}
            <div className="bg-gray-800 rounded-lg border border-gray-600 p-6">
                <h2 className="text-xl font-semibold text-gray-100 mb-6 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-yellow-500" />
                    Activity Statistics
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <div className="text-2xl font-bold text-yellow-500 mb-1">
                            {user.watchlistCount}
                        </div>
                        <div className="text-sm text-gray-400">Watchlist Items</div>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <div className="text-2xl font-bold text-yellow-500 mb-1">
                            {user.alertsCount}
                        </div>
                        <div className="text-sm text-gray-400">Active Alerts</div>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <div className="text-2xl font-bold text-yellow-500 mb-1">
                            {Math.floor((new Date().getTime() - user.joinDate.getTime()) / (1000 * 60 * 60 * 24))}
                        </div>
                        <div className="text-sm text-gray-400">Days Active</div>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <div className="text-2xl font-bold text-yellow-500 mb-1">
                            {user.watchlistCount + user.alertsCount}
                        </div>
                        <div className="text-sm text-gray-400">Total Activity</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

