import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(length: 4,
        child:  Scaffold(
          appBar: AppBar(
            bottom: TabBar(tabs: [
              Tab(icon: Icon(Icons.directions_car)),
              Tab(icon: Icon(Icons.directions_transit)),
              Tab(icon: Icon(Icons.directions_bike)),
              Tab(icon: Icon(Icons.directions_subway)),
            ]),
            title: Text("Flutter Deneme"),
          ),
          body: TabBarView(
            children: [],
          ),
        ),
      ),
    );
  }
}

class AnaEkran extends StatelessWidget {
  const AnaEkran({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(),
    );
  }
}