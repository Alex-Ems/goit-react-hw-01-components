import Profile from './Profile/Profile';
import Stats from './Statistics/Statistics';
import DataList from './Statistics/DataList';

import user from './Profile/user.json';
import data from './Statistics/data.json';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" elements={data}>
        <DataList elements={data} />
      </Stats>
    </div>
  );
};
