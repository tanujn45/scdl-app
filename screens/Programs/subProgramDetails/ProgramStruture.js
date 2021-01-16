import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { Table, Row, Rows, Cols } from "react-native-table-component";

const ProgramStructure = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.credit}>
        Total Credit Points - {props.progStruct.credit}
      </Text>
      <FlatList
        data={props.progStruct.semester}
        renderItem={({ item }) => {
          return (
            <Table
              borderStyle={{
                borderWidth: 4,
                borderColor: "#888",
              }}
              style={{ marginBottom: 30 }}
            >
              <Row
                data={["Semester " + item.sem]}
                style={styles.head}
                textStyle={[styles.text, { fontWeight: "bold", fontSize: 16 }]}
              />
              <Cols data={[item.subjects]} textStyle={styles.text} />
            </Table>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  credit: { marginBottom: 20, fontSize: 18 },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#fff" },
  text: { margin: 6 },
});

export default ProgramStructure;
