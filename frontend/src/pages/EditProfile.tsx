import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function EditProfile() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Update your profile information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label id="username">Username</Label>
            <Input disabled id="username" placeholder="Username" />
          </div>
          <div className="space-y-2">
            <Label id="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label id="age">Age</Label>
            <Input id="age" placeholder="Enter your age" type="number" />
          </div>
          <div className="space-y-2">
            <Label id="city">City</Label>
            <Input id="city" placeholder="Enter your city" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label id="country">Country</Label>
            <Input id="country" placeholder="Enter your country" />
          </div>
          <div className="space-y-2">
            <Label id="profile-image">Profile Image</Label>
            <Input id="profile-image" type="file" />
          </div>
        </div>
        <div className="space-y-2">
          <Label id="background-image">Background Image</Label>
          <Input id="background-image" type="file" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Save Changes</Button>
      </CardFooter>
    </Card>
  )
}