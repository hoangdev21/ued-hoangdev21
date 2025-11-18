import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { Card, Button } from '../../components/Common';

const Home: React.FC = () => {
  return (
    <MainLayout title="Trang chủ">
      <div className="space-y-4">
        {/* Welcome Card */}
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-1">Xin chào!</h2>
              <p className="text-blue-100">Chào mừng đến UED MIS</p>
            </div>
            <div className="text-4xl">👋</div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
            <p className="text-2xl font-bold text-green-600">8.5</p>
            <p className="text-xs text-gray-600 mt-1">GPA</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-xs text-gray-600 mt-1">Tín chỉ</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
            <p className="text-2xl font-bold text-purple-600">18</p>
            <p className="text-xs text-gray-600 mt-1">Học phần</p>
          </div>
        </div>

        {/* Announcements */}
        <Card>
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            📢 Thông báo mới
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3 pb-3 border-b border-gray-200">
              <div className="text-xl">📊</div>
              <div className="flex-1">
                <p className="font-medium text-sm">Bảng điểm đã cập nhật</p>
                <p className="text-xs text-gray-500">Cập nhật hôm nay lúc 14:30</p>
              </div>
            </div>
            <div className="flex gap-3 pb-3 border-b border-gray-200">
              <div className="text-xl">📅</div>
              <div className="flex-1">
                <p className="font-medium text-sm">Lịch thi cuối kỳ HK2</p>
                <p className="text-xs text-gray-500">Cập nhật hôm qua</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-xl">🏥</div>
              <div className="flex-1">
                <p className="font-medium text-sm">Kiểm tra sức khỏe định kỳ</p>
                <p className="text-xs text-gray-500">Tuần tới 08:00 AM</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
            ✍️ Tính điểm
          </Button>
          <Button variant="secondary" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
            📚 Học phần
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
