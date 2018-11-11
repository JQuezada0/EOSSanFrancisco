using namespace std;

struct sneaker {
  uint64_t id;
  uint64_t owner_id;
  string   display_name;
  string   subtitle;
};

struct sneakers {
  sneaker sneakerList[15] = {
      {1, 0, "Nike", "Air Jordan XV"},
      {2, 0, "Nike", "Air Max 270"},
      {3, 0, "Nike", "SB Dunk Low Pro"},
      {4, 0, "Nike", "Zoom Fly Sp"},
      {5, 0, "Nike", "Hotline"},
      {6, 1, "Nike", "Air Jordan III"},
      {7, 1, "Nike", "Kyrie 5"},
      {8, 1, "Nike", "Air Force 270 Utility"},
      {9, 1, "Nike", "Air Max 270"},
      {10, 1, "Nike", "Air Jordan XXXIII"},
      {11, 2, "Nike", "Air Max 97"},
      {12, 2, "Nike", "Lebron 16"},
      {13, 2, "Nike", "ACG Air Revaderchi"},
      {14, 2, "Nike", "Air Max Deluxe"},
      {15, 2, "Nike", "Air Jordan I High Zip"}
  };
};