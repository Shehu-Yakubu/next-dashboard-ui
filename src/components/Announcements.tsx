"use client";

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-28
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatum,
            expedita. Rerum, guidem facilis?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-28
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatum,
            expedita. Rerum, guidem facilis?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-28
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatum,
            expedita. Rerum, guidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
