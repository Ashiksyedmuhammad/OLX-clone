import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const TestData = () => {
  const createTestAd = async () => {
    try {
      await addDoc(collection(db, "ads"), {
        title: "Test Ad",
        price: 999,
        description: "This is a sample ad for testing.",
        location: "Test City",
        postedAt: new Date().toLocaleDateString(),
        imageUrl: "https://via.placeholder.com/300x200"
      });
      alert("Ad created successfully!");
    } catch (error) {
      console.error("Error creating ad:", error);
    }
  };

  return (
    <div className="p-8">
      <button onClick={createTestAd} className="bg-blue-500 text-white p-4 rounded">
        Create Test Ad
      </button>
    </div>
  );
};

export default TestData;
