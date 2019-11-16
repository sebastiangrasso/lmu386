//Homework 4: Sebastian Grasso

import java.util.stream.Collectors.*;
import java.util.Optional;
import java.util.Map;
import java.util.Arrays;
import java.util.regex.Pattern;
import java.util.TreeMap;
import java.io.BufferedReader;
import static java.util.Comparator.*;
import static java.util.stream.Collectors.*;



public class StreamPractice {

    static Pattern nonWord = Pattern.compile("[^\\p{L}']+");

    public static Map<Integer, Long> wordCountByLength(BufferedReader reader) {
        return reader
            .lines()
            .flatMap(nonWord::splitAsStream)
            .filter(s -> s.length() > 0)
            //Collect Stream into TreeMap
            .collect(groupingBy(String::length, TreeMap::new, counting()));
    }

    public static class Batter {
        String name;
        String team;
        int atBats;
        int hits;
        double average;
        Batter(String line) {
            String[] components = line.split("\\s*,\\s*");
            this.name = components[0];
            this.team = components[1];
            this.atBats = Integer.parseInt(components[2]);
            this.hits = Integer.parseInt(components[3]);
            this.average = (double)this.hits / (double)this.atBats;
        }
    }

    public static Map<String, Optional<Batter>> bestBatterByTeam(BufferedReader reader) {
        return reader
            .lines()
            .map(player -> new Batter(player))
            .filter(player -> (player.atBats >= 100))
            //Collect Players with highest batting average from each team
            .collect(groupingBy(player -> player.team, maxBy(comparing(player->player.average))));
        }
}
