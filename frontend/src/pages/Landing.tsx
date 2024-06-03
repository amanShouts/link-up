import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
      <HeroPage />
      <main>
        <section className="py-16 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-50">
              Explore Our Startup Ecosystem
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Discover the resources, tools, and connections you need to grow
              your startup.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Access a network of investors, venture capitalists, and
                    funding opportunities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-primary-500 hover:text-primary-400"
                    to="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Connect with experienced entrepreneurs and industry experts
                    for guidance and support.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-primary-500 hover:text-primary-400"
                    to="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Attend events, workshops, and meetups to build relationships
                    and expand your network.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-primary-500 hover:text-primary-400"
                    to="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-50">
              Featured Startups
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Check out some of the innovative startups in our ecosystem.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acme Inc.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Acme Inc. is a leading provider of innovative software
                    solutions for businesses.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-primary-500 hover:text-primary-400"
                    to="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Startup X</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Startup X is disrupting the industry with its cutting-edge
                    technology.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-primary-500 hover:text-primary-400"
                    to="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Innovate Labs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Innovate Labs is a hub for innovative startups and
                    entrepreneurs.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-primary-500 hover:text-primary-400"
                    to="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-50">
              Join Our Startup Community
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Connect with other entrepreneurs, investors, and industry experts.
            </p>
            <div className="mt-8 flex justify-center">
              <Button className="mr-4" variant="default">
                Join Now
              </Button>
              <Button
                className="text-gray-300 hover:text-gray-50"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Funding
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Networking
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Support
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Press
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gray-50" to="#">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 py-6 text-center text-gray-400">
            © 2024 Startup Ecosystem Integrator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroPage() {
  return (
    <section
      className={
        'w-full h-[70vh] bg-white dark:bg-black flex items-center mt-60 flex-col gap-6 relative'
      }
    >
      <div className="dark:text-neutral-200 text-black bg-white dark:bg-black z-10 border border-neutral-700 rounded-full text-sm p-2 px-8">
        <p className={'z-10'}>
          Come and join
          <span className={'underline px-2'}>millions</span>
          of enthusiasts like you{' '}
        </p>
      </div>

      <h1 className="text-6xl font-bold  z-10 w-[60%] dark:text-neutral-200 text-black text-center">
        Welcome to Linkup.
      </h1>
      <p
        className={
          'w-[70%] text-center z-10 text-lg dark:text-neutral-400 text-black'
        }
      >
        {' '}
        Discover a platform where entrepreneurs meet mentors and investors.
        Build meaningful connections to drive your business forward. Join us
        today and transform your entrepreneurial journey.
      </p>
      <div className={'w-[60%] mt-10 z-10'}>
        <Button className="mr-4 w-[48%] z-10" variant="default">
          Get Started
        </Button>

        <Button
          className="mr-4 w-[48%] z-10 text-black dark:text-white border-neutral-700"
          variant="outline"
        >
          Learn More
        </Button>
      </div>
      <img
        className={'absolute top-[-50%] w-full dark:invert opacity-20 '}
        src={'/background.jpg'}
      />
    </section>
  );
}
