import Header from '../components/Header';
import Menu from '../components/Menu';
import {ScrollView} from 'react-native';
import {Container} from '../components/Container';
import {useTheme} from 'styled-components/native';
// import UserListPage from './UserListPage';
import SelectedUserPage from './SelectUserPage';

const SearchPage = () => {
    const theme = useTheme();
    return (
        <>
            <Header text="유저 검색"/>
            <ScrollView style={{width: '100%', height: '90%'}}>
                <Container style={{backgroundColor: theme.inputColor, padding: -10, justifyContent: 'flex-start', minHeight: '100%'}}>
                    <SelectedUserPage />
                </Container>
            </ScrollView>
            <Menu status="search" />
        </>
    );
}

export default SearchPage;