import * as React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

interface ISelectPlayerFormProps {
  friends: User[];
  selectedFriends: string[];
  handleSelectPlayer: (playerId: string) => void;
}

export const SelectPlayerForm: React.FunctionComponent<ISelectPlayerFormProps> = (props) => {
  const { friends, selectedFriends, handleSelectPlayer } = props;

  return (
    <List>
      { friends.map((friend, index) => (
        <ListItem key={index} dense button onClick={() => handleSelectPlayer(friend.id)}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={selectedFriends.indexOf(friend.id) !== -1}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText id={`friend-${index}`} primary={`${index + 1} - ${friend.name} ${friend.lastName}`} />
        </ListItem>
      )) }
    </List>
  );
}

const mapStateToProps = ({ friends }: any) => ({
  friends
});

export default connect(mapStateToProps)(SelectPlayerForm);