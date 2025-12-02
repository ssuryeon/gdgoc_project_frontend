import Header from '../components/Header';
import Menu from '../components/Menu';
import {ScrollView, View} from 'react-native';
import {Container} from '../components/Container';
import {useTheme} from 'styled-components/native';
import SearchPageStack from '../navigations/SearchPageStack';

const SearchPage = () => {
    const theme = useTheme();

    return (
        <>
            <Header text="유저 검색"/>
            <View style={{flex: 1, width: '100%'}}>
                <SearchPageStack />
            </View>
            <Menu status="search" />
        </>
    );
}

export default SearchPage;