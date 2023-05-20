import Link from "next/link";
import Footer from "../../../../Components/Footer";
import HeaderComp from "../../../../Components/Header";
import { BreadCrumbs, CommonHeading } from "../../../../Components/Small";

export default function CareerName(){

    return(

        <div>

<HeaderComp special="graduate" main="web developer role"  />


<BreadCrumbs/>


<div className="flex px-28 gap-x-8 mb-8">


<div className="w-3/4  pr-8 space-y-5 text-lg text-[#777777]">
    

<p>Revive is a growing Digital Marketing Agency, made up of designers, developers and marketeers with an aim to help our clients grow. We look for the best people – positive minded, enthusiastic, bright and creative individuals. We value excellence. We support each other, but don’t carry people – average is not our game.</p>

<p>We are looking for a Computer Science (or similar) graduate to join our team as a trainee developer. We will consider candidates with experience, but this role is aimed at new graduates.</p>


<p>You will work as part of Revive’s development team, and will work on a variety of back-end web projects, further your skills in programming, and learn app development and database design and management.</p>


<p>The ideal candidate needs to be a motivated, quick self-learner, but also be able to take instruction and be comfortable working well with others. Ideally you should love solving problems, enjoy elegant solutions, and be prepared to work hard to do things the right way.</p>


<p>Our agency works on both open-source and established development stacks – so a strong foundation in programming is helpful as you will be involved with a number of languages.</p>


<p>If you don’t like problem solving or a challenge – this probably isn’t for you.</p>

<p>Our culture is friendly and fun – we don’t do office politics, and we support each other in our respective roles. We all work for a common goal, which is our clients’ success – we celebrate when they get results. We do pizzas once a month, dress smart casual during the week and dress down on Fridays. We get down the pub for the occasional drink, and we party hard at Christmas! The culture is work hard, but enjoy the work.</p>


<p className="text-black text-2xl font-semibold">Apply for this role</p>


<div className="flex items-center gap-x-5 text-primary font-semibold text-[1rem]">

<div className="border border-primary px-4 py-1 rounded-3xl">Apply Online</div>

<p>or email</p>

<div className="border border-primary px-4 py-1 rounded-3xl">temp@email.com</div>


</div>



</div>


<div className="w-1/4 ">
    

<CommonHeading   special="more" main="job roles"  />

<div className="pl-6 font-semibold">

<Link href="/">Front End Web Developer</Link>


</div>



</div>




</div>





<Footer/>




        </div>


    )



}