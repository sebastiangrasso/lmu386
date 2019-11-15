// IMPORTS GO HERE

public class StreamPractice {

    static Pattern nonWord = Pattern.compile("[^\\p{L}']+");

    public static Map<Integer, Long> wordCountByLength(BufferedReader reader) {
        // Return a tree map whose keys are word lengths
        // and corresponding values are the number of words
        // in the reader with that length. For "length" of a
        // string, just use Java’s length method on strings.
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
        // Return a map that records, for each team, the batter with
        // the highest average over all batters that have at least
        // 100 at-bats. If a team has no batters with at least 100 at
        // bats, the team will not appear in the map.
    }
}
