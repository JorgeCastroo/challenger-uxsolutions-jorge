import React, { useEffect, useState, useCallback } from "react";
import * as S from "./Home.styles";
import { AsyncStorage, RefreshControl } from "react-native";
import { LIST_DATA } from "../../../utils/constants";
import color from "../../../styles/theme";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";
import Card from "../../../Components/Card/Card";
import Button from "../../../Components/Button/Button";

type List = {
  date: string;
  title: string;
  description: string;
  legislation: string;
  type: string;
  startTime: string;
  endTime: string;
  variableDates: {};
};

const Home: React.FC = () => {
  const [data, setData] = useState<List[]>();
  const [selected, setSelected] = useState<List>();
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<propsStack>();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const List = async () => {
    const storage = await AsyncStorage.getItem(LIST_DATA);
    const data = storage ? await JSON.parse(storage) : {};
    setData(data.data);
  };
  useEffect(() => {
    List();
  }, []);

  async function handleDelete() {
    const remove = selected && (await data?.splice(data.indexOf(selected), 1));
    AsyncStorage.setItem(LIST_DATA, JSON.stringify({ data }));
    await onRefresh();
  }

  async function handleEdit() {
    const remove = selected && (await data?.splice(data.indexOf(selected), 1));
    AsyncStorage.setItem(LIST_DATA, JSON.stringify({ data }));
    navigation.navigate("Edit", { selected, data });
  }

  useFocusEffect(
    useCallback(() => {
      onRefresh();
    }, [])
  );
  return (
    <S.Container>
      <S.SectionTop>
        <S.TitleTop>Lista</S.TitleTop>
      </S.SectionTop>
      <S.ContainerScroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <S.Sections>
          <S.SectionCards>
            <S.Padding>
              {data &&
                data.map((item) => (
                  <Card
                    onPress={() => setSelected(item)}
                    color={
                      selected?.title === item.title
                        ? color.colors.primary
                        : color.colors.gray_one
                    }
                    key={item.title}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    legislation={item.legislation}
                    type={item.type}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    variableDates={item.variableDates}
                  />
                ))}
            </S.Padding>
          </S.SectionCards>
        </S.Sections>
      </S.ContainerScroll>
      <S.SectionBottom>
        <S.Button>
          <Button text="Excluir" type="solid" onPress={handleDelete} />
        </S.Button>
        <S.Button>
          <Button text="Editar" type="solid" onPress={handleEdit} />
        </S.Button>
      </S.SectionBottom>
    </S.Container>
  );
};

export default Home;
