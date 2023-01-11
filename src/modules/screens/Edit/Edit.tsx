import React, { useState } from "react";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import * as S from "./Edit.styles";
import * as yup from "yup";
import { Formik } from "formik";
import { LIST_DATA } from "../../../utils/constants";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";

type Edit = {
  route: any;
};

type List = {
  date: string;
  title: string;
  description: string;
  legislation: string;
  type: string;
};

const Edit: React.FC<Edit> = ({ route }) => {
  const data = route.params.selected;
  const edit = route.params.data;
  const [input, setInput] = useState("");
  const navigation = useNavigation<propsStack>();

  const validationSchema = yup.object().shape({
    date: yup.string().required("*  é obrigatório"),
    title: yup.string().required("*  é obrigatório"),
    description: yup.string().required("*  é obrigatório"),
    legislation: yup.string().required("*  é obrigatório"),
    type: yup.string().required("*  é obrigatório"),
  });

  async function handleEdit(value: List) {
    const data = {
      date: value.date,
      title: value.title,
      description: value.description,
      legislation: value.legislation,
      type: value.type,
      variableDates: { input },
    };

    await edit.unshift(data);

    await AsyncStorage.setItem(LIST_DATA, JSON.stringify({ edit }));
    navigation.navigate("Home");
  }

  return (
    <S.Container>
      <Formik
        initialValues={{
          title: "",
          date: "",
          description: "",
          legislation: "",
          type: "",
        }}
        onSubmit={(value) => handleEdit(value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <S.Form>
            <S.SectionTop>
              <S.TitleTop>Lista</S.TitleTop>
            </S.SectionTop>
            {Object.keys(errors).length > 0 ? (
              <S.Errors>{"* Preencha todos os campos"}</S.Errors>
            ) : (
              <></>
            )}
            <S.ContainerScroll>
              <S.Padding>
                <Input
                  label="Data"
                  placeholder="Digite a data"
                  value={values.date}
                  onChangeText={handleChange("date")}
                />
                <Input
                  label="Titulo"
                  placeholder={"Digite o titulo"}
                  value={values.title}
                  onChangeText={handleChange("title")}
                />
                <Input
                  label="Descrição"
                  placeholder={"Digite a descrição"}
                  value={values.description}
                  onChangeText={handleChange("description")}
                />
                <Input
                  label="Legislação"
                  placeholder={"Digite a legislação"}
                  value={values.legislation}
                  onChangeText={handleChange("legislation")}
                />
                <Input
                  label="Tipo"
                  placeholder={"Digite o tipo"}
                  value={values.type}
                  onChangeText={handleChange("type")}
                />
                {Object.keys(data.variableDates).length > 0 ? (
                  <Input
                    label="Datas variaveis"
                    placeholder="Digite as variaveis"
                    onChangeText={(value) => setInput(value)}
                  />
                ) : (
                  <></>
                )}
              </S.Padding>
            </S.ContainerScroll>
            <S.SectionBottom>
              <Button text="Editar" type="solid" onPress={handleSubmit} />
            </S.SectionBottom>
          </S.Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default Edit;
