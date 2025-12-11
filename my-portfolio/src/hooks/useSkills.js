import {useEffect, useState} from "react";
import {getData} from "@/hooks/fetch.js";
// import skillsData from '@/data/skills.json';
export default function useSkills(){
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const load = async () => {
            const data = await getData();
            setSkills(data);
        };
        load();
    }, []);

    return skills;
}