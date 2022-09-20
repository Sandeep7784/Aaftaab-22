# Generated by Django 4.1.1 on 2022-09-20 03:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usermanagement', '0003_participant_user_interest'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='event_registered',
            field=models.CharField(choices=[('video_making_workshop', 'Video Making Workshop'), ('creative_writing_workshop', 'Creative Writing Workshop'), ('acting_workshop', 'Acting Workshop'), ('prompt_poetry', 'Prompt Poetry'), ('noob_quiz', 'Noob Quiz'), ('word_games', 'Word Games'), ('treasure_hunt', 'Treasure Hunt'), ('just_a_minute_speech', 'Just A Minute Speech'), ('hindi_debate', 'Hindi Debate'), ('english_debate', 'English Debate'), ('character_reenactment', 'Prompt based character re-enactment'), ('mythology_quiz', 'Mythology quiz'), ('mela_quiz', 'MELA Quiz'), ('open_mic', 'Open Mic')], max_length=255),
        ),
    ]