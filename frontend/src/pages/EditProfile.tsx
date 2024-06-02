import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { closeModal } from "@/store/slice/modalSlice";
import { User } from "@/store/slice/userSlice";
import axios from "axios";
import { BACKEND_URL } from "@/config";

export default function EditProfile() {
  const currentUser: User | undefined = useSelector((state: RootState) => state.users.currentUser as User);
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string | undefined>(currentUser?.username);
  const [name, setName] = useState<string | undefined>(currentUser?.name);
  const [type, settype] = useState<string | undefined>(currentUser?.type || "");
  const [isMentor, setIsMentor] = useState<boolean | undefined>(currentUser?.isMentor);
  const [age, setAge] = useState<number | undefined>(currentUser?.age);
  const [bio, setBio] = useState<string | undefined>(currentUser?.bio || "");
  const [city, setCity] = useState<string | undefined>(currentUser?.city);
  const [country, setCountry] = useState<string | undefined>(currentUser?.country);

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username);
      setName(currentUser.name);
      settype(currentUser.type || "");
      setIsMentor(currentUser.isMentor);
      setAge(currentUser.age);
      setBio(currentUser.bio);
      setCity(currentUser.city);
      setCountry(currentUser.country);
    }
  }, [currentUser]);

  const handleSave = () => {
    console.log({
      username,
      name,
      type,
      isMentor,
      age,
      bio,
      city,
      country,
    });

    const payload = { username, type, isMentor, age, bio, city, country }


    axios.put(BACKEND_URL+'/edit-user',payload)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Update your profile information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p>Username*</p>
            <Input
              id="username"
              disabled
              className="border-color-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <p>Name*</p>
            <Input
              id="name"
              className="border-color-white"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p>User Type*</p>
            <Input
              id="type"
              className="border-color-white"
              placeholder="Enter your user type"
              type="text"
              value={type}
              onChange={(e) => settype(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <p className="text-nowrap">Is Mentor*</p>
            <Input
              id="isMentor"
              className="border-color-white w-10 rounded bg-transparent"
              placeholder="Enter if you are a mentor"
              type="checkbox"
              checked={isMentor}
              onChange={(e) => setIsMentor(e.target.checked)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p>Age*</p>
            <Input
              id="age"
              className="border-color-white"
              placeholder="Enter your age"
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <p>City*</p>
            <Input
              id="city"
              className="border-color-white"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p>Country</p>
            <Input
              id="country"
              className="border-color-white"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <p>Bio</p>
            <Input
              id="bio"
              className="border-color-white"
              placeholder="Enter your bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" onClick={handleSave}>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
