import React, { useEffect, useState } from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const PopularProfiles = () => {
    const [profilesData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });
    const { popularProfiles } = profilesData;
    const currentUser = useCurrentUser()

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(
              "/profiles/?ordering=-followers_count"
            );
            setProfileData((prevState) => ({
              ...prevState,
              popularProfiles: data,
            }));
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [currentUser]);

  return (
    <Container className={appStyles.Content}>

        
        <p>Most followed profiles.</p>
        {popularProfiles.results.map(profiles => (
            <p key={profiles.id}>{profiles.owner}</p>
        ))}


    </Container>
  )
}

export default PopularProfiles
